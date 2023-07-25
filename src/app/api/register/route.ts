import { hash } from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, password, promotions } = body;
  const email = body.email.toLowerCase();
  if (!firstName || !lastName || !email || !password) {
    new NextResponse("A Required Information Is Missing", { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (exist) {
    new NextResponse("User with the given email already exist", {
      status: 400,
    });
  }

  const hashedPassword = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      promotions,
    },
  });

  return NextResponse.json(user);
}
