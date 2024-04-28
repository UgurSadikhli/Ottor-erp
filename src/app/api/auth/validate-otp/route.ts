import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import fs from "fs";
import {cookies} from "next/headers";

const prisma = new PrismaClient();
const cacheFile = "cache.json";

let inMemory: { [key: string]: string } = {};

try {
  if (fs.existsSync(cacheFile)) {
    const data = fs.readFileSync(cacheFile, "utf-8");
    inMemory = JSON.parse(data);
  }
} catch (error) {
  console.error("Error loading OTPs from file:", error);
}

export async function POST(req: Request) {
  const reqObject = await req.json();

  try {
    if (!reqObject.email || !reqObject.otp) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
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

    const cachedOTP = inMemory[reqObject.email];

    console.log(cachedOTP);
    
    if (!cachedOTP) {
      return NextResponse.json(
        { error: "OTP wasn't confirmed" },
        { status: 400 }
      );
    }

    if (cachedOTP !== reqObject.otp) {
      return NextResponse.json({ error: "Wrong OTP" }, { status: 400 });
    }

    delete inMemory[reqObject.email];

    const updatedUser = await prisma.user.update({
      where: {
        email: reqObject.email,
      },
      data: {
        emailConfirmed: true,
      },
    });

    fs.writeFileSync(cacheFile, JSON.stringify(inMemory));

    cookies().set('2fa','true');

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
