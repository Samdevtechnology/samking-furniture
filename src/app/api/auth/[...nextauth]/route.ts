import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import type { Adapter } from "next-auth/adapters";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // check if email and is valid
        const email = credentials!.email.toLowerCase();
        const password = credentials!.password;

        if (!email || !password) return null;

        // check if user exist

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user)
          throw new Error("Incorrect Username Or Password. Pls Try Again");

        // check if password match

        const passwordsMatch = await compare(password, user.password!);

        if (!passwordsMatch)
          throw new Error(
            "Incorrect Username Or Password. Pls Check And Try Again"
          );

        // return user object if everything is valid
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" || account?.provider === "facebook") {
        try {
          const { email } = user;

          if (!email) return false;

          const exist = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!exist) {
            const { name, image } = user;
            const nameParts = name!.split(" ");
            const firstName = nameParts[0];
            const lastName = nameParts.slice(1).join(" ") ?? "";
            const newUser = await prisma.user.create({
              data: {
                firstName,
                lastName,
                email,
                image,
                provider: account.provider,
              },
            });

            await prisma.account.create({
              data: {
                userId: newUser.id,
                ...account,
              },
            });
            return true;
          }

          const acct = await prisma.account.findFirst({
            where: {
              userId: exist.id,
            },
          });

          if (!acct) {
            await prisma.account.create({
              data: {
                userId: exist.id,
                ...account,
              },
            });
          }

          return true;
        } catch (error) {
          return false;
        }
      }
      return true;
    },

    //REF : https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.name = `${user.firstName} ${user.lastName}`;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    // To use the role in the client side
    async session({ session, token }) {
      session!.user!.role = token.role;
      session!.user!.firstName = token.firstName;
      session!.user!.lastName = token.lastName;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
