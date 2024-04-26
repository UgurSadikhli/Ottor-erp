import { generateOTP, sendOTP } from "@/services/OtpService";
import fs from "fs";
import { NextResponse, NextRequest } from "next/server";
import { User } from "@/models/User";
const dbPath = "db.json";
import inMemory from "../../../../cache";

export async function POST(req: Request) {
  const reqObject = await req.json();
  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  if(!reqObject.email)
    {
      return NextResponse.json(
        { error: "Missing data" },
        { status: 400 }
      );
    }

  if (!db.users.some((user: User) => user.email === reqObject.email)) {
    return NextResponse.json(
      { error: "User with this email does not exist" },
      { status: 400 }
    );
  }

  if (inMemory.hasItem(reqObject.email)) {
    inMemory.removeItem(reqObject.email);
  }

  const otp = generateOTP(6);
  await sendOTP(reqObject.email, otp);

  inMemory.storeExpiringItem(reqObject.email, otp, 18000);

  console.log(inMemory.getItems());

  return NextResponse.json(
    { error: "OTP was sent successfully" },
    { status: 200 }
  );
}
