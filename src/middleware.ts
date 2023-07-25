//Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { withAuth, type NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    // if (request.nextUrl.pathname.startsWith("/account")
    // && request.nextauth.token?.role !== "admin") {
    // return NextResponse.rewrite(
    //     new URL("/denied", request.url)
    // )
    // }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Applies next-auth only to matching routes
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/account"] };
