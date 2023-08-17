import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import { decrypt, encrypt } from "./components/encrypt";
import { hash, compare } from "bcrypt";
import generateOtp from "./components/generateOtp";
import resetMail from "./components/mail/resetMail";

const prisma = new PrismaClient();
const OTP_TIME_LIMIT = Number(process.env.OTP_TIME_LIMIT) || 30 * 60 * 1000;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const email = body.email.toLowerCase();
  if (!email) {
    return NextResponse.json(
      {
        message:
          "Please enter the e-mail address associated with your account.",
      },
      { status: 400 }
    );
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!exist) {
    return NextResponse.json(
      {
        redirect: true,
        message: "No account associated with this email address",
      },
      {
        status: 303,
      }
    );
  }

  const { samkingSid, otp } = await generateOtp({
    userEmail: exist.email,
    userName: exist.firstName,
  });

  const hashedSid = encrypt(samkingSid);

  const sendMail = await resetMail({
    email: exist.email,
    name: exist.firstName,
    otp,
  });

  return NextResponse.json(
    { message: "Email Valid", ok: true, samkingSid: hashedSid },
    {
      status: 200,
    }
  );
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { samkingSid: hashedSid, type } = body;
  if (!hashedSid) {
    return NextResponse.json(
      {
        message: "There is no session in progress. Pls initiate one",
        error: true,
      },
      { status: 400 }
    );
  }

  const samkingSid = decrypt(hashedSid);

  const exist = await prisma.activateOtp.findUnique({
    where: {
      id: samkingSid,
    },
  });

  if (!exist) {
    return NextResponse.json(
      {
        message: "There is no session in progress. Pls initiate one",
        error: true,
      },
      { status: 400 }
    );
  }

  if (type === "newOtp") {
    const { samkingSid: newSid, otp } = await generateOtp({
      userEmail: exist.userEmail,
      userName: exist.userName,
    });

    const newHashedSid = encrypt(newSid);

    const sendMail = await resetMail({
      email: exist.userEmail,
      name: exist.userName,
      otp,
    });

    return NextResponse.json(
      { message: "Email Valid", ok: true, samkingSid: newHashedSid },
      {
        status: 200,
      }
    );
  }

  if (type === "compare") {
    const otp = body.otp;

    if (!otp) {
      return NextResponse.json(
        {
          message: "Pls provide the OTP sent to your mail.",
          error: true,
        },
        { status: 400 }
      );
    }

    const otpMatch = await compare(otp, exist.otp);

    if (!otpMatch) {
      return NextResponse.json(
        {
          message:
            "This verification code is not valid. Please request a new one.",
          error: true,
        },
        { status: 400 }
      );
    }

    const createdAtTime = exist.createdAt.getTime();
    const currentTime = new Date().getTime();

    const timeDifference = currentTime - createdAtTime;
    const isValid = timeDifference <= OTP_TIME_LIMIT;

    if (!isValid) {
      return NextResponse.json(
        {
          message: "Verification code expired. Please request a new one.",
          error: true,
        },
        { status: 400 }
      );
    }

    await prisma.activateOtp.update({
      where: { id: exist.id },
      data: { verified: true },
    });

    return NextResponse.json(
      { message: "Otp Valid", ok: true },
      {
        status: 200,
      }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { samkingSid: hashedSid, password, confirm } = body;
  if (!hashedSid) {
    return NextResponse.json(
      {
        error: true,
        message: "There is no session in progress. Pls initiate one",
      },
      { status: 400 }
    );
  }

  const samkingSid = decrypt(hashedSid);

  const exist = await prisma.activateOtp.findUnique({
    where: {
      id: samkingSid,
      verified: true,
    },
  });

  if (!exist) {
    return NextResponse.json(
      {
        error: true,
        message: "There is no session in progress. Pls initiate one",
      },
      { status: 400 }
    );
  }

  if (password !== confirm) {
    return NextResponse.json(
      {
        error: true,
        message: "Password do not match. Pls confirm.",
      },
      { status: 400 }
    );
  }

  const hashedNewPassword = await hash(password, 10);

  const user = await prisma.user.update({
    where: {
      email: exist.userEmail,
    },
    data: {
      password: hashedNewPassword,
    },
  });

  const mails = await prisma.activateOtp.deleteMany({
    where: {
      userEmail: exist.userEmail,
    },
  });

  return NextResponse.json(
    {
      message: "Password changed. Pls proceed to login",
      ok: true,
      samkingSid: "",
    },
    {
      status: 200,
    }
  );
}
