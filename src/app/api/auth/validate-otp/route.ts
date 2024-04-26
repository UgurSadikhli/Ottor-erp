import { User } from "@/models/User";
import fs from "fs";
import { NextResponse, NextRequest } from "next/server";
import inMemory from "../../../../cache";

const dbPath = "db.json";

export async function POST(req: Request) {
  const reqObject: ValidateOtpDto = await req.json();
  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  if (!db.users.find((user: User) => user.email === reqObject.email)) {
    return NextResponse.json(
      { error: "User with this email does not exist" },
      { status: 400 }
    );
  }

  const user = db.users.find((user: User) => user.email === reqObject.email);

  if (!reqObject.email || !reqObject.otp) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  console.log(reqObject.email);
  console.log(inMemory.retrieveItemValue(reqObject.email));
  console.log(inMemory.hasItem(reqObject.email));
  console.log(inMemory.getItems());

  if (!inMemory.hasItem(reqObject.email)) {
    return NextResponse.json(
      { error: "OTP wasn't confirmed" },
      { status: 400 }
    );
  }

  if (inMemory.retrieveItemValue(reqObject.email) != reqObject.otp) {
    inMemory.removeItem(reqObject.email);
    return NextResponse.json({ error: "Wrong OTP" }, { status: 400 });
  }

  user.emailconfirmed = true;
  // console.log(db.users.some((user: User) => user.email === reqObject.email).emailconfirmed = true);
  fs.writeFileSync(dbPath, JSON.stringify(db));

  return NextResponse.json(user, { status: 200 });
}
