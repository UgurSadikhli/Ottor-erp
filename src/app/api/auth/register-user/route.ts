import { User } from "@/models/User";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import fs from "fs";

const dbPath = "db.json";

export async function POST(req: Request) {
  const reqObject = await req.json();
  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  try {
    if (
      !reqObject ||
      !reqObject.name ||
      !reqObject.surname ||
      !reqObject.email ||
      !reqObject.password
    ) {
      return NextResponse.json(
        { error: "Missing or invalid registration data" },
        { status: 400 }
      );
    }

    if (db.users.some((user: User) => user.email === reqObject.email)) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    const newUser: User = {
      id: randomUUID(),
      name: reqObject.name,
      surname: reqObject.surname,
      email: reqObject.email,
      password: reqObject.password,
      emailconfirmed: false,
    };

    db.users.push(newUser);
    fs.writeFileSync(dbPath, JSON.stringify(db));

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
