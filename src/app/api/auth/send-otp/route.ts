import { generateOTP, sendOTP } from "@/services/OtpService";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import fs from "fs";

const cache = "cache.json";
const prisma = new PrismaClient();

interface InMemoryData {
  [key: string]: string;
}

export async function POST(req: Request) {
  const reqObject = await req.json();

  try {
    if (!reqObject.email) {
      return NextResponse.json(
        { error: "Missing data" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: reqObject.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User with this email does not exist" },
        { status: 400 }
      );
    }

    let inMemory: InMemoryData = {};
    if (fs.existsSync(cache)) {
      const data = fs.readFileSync(cache, "utf-8");
      inMemory = JSON.parse(data);
    }

    const otp = generateOTP(6);
    inMemory[user.email] = otp;

    fs.writeFileSync(cache, JSON.stringify(inMemory));

    await sendOTP(reqObject.email, otp);

    return NextResponse.json(
      { message: "OTP was sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}
