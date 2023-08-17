import { PrismaClient } from "@prisma/client";
import { randomInt } from "crypto";
import { hash } from "bcrypt";

type prop = {
  userEmail: string;
  userName: string;
};

const prisma = new PrismaClient();

const generateOtp = async ({ userEmail, userName }: prop) => {
  // Generate a random integer between 1000 and 9999 (inclusive)
  const otp = randomInt(1000, 10000);
  const hashedOtp = await hash(String(otp), 10);
  const userOtp = await prisma.activateOtp.create({
    data: {
      userEmail,
      userName,
      otp: hashedOtp,
    },
  });

  return { samkingSid: userOtp.id, otp };
};

export default generateOtp;
