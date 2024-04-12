import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";
import fs from 'fs'
import { User } from "@/models/User";

const dbPath = "db.json"
const JWT_SECRET = "13KSKOA41OAQWJ11ID";

export async function POST(req: Request) {
  const reqObject = await req.json();
  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8")); 

  try {
    if (!reqObject) {
      return NextResponse.json(
        { error: "Missing or invalid login data" },
        { status: 400 }
      );
    }

    const users = db.users;

    if (!reqObject.email || !reqObject.password) {
      return NextResponse.json(
        { error: "Missing login data" },
        { status: 400 }
      );
    }

    const user = users.find(
      (x: User) => x.email == reqObject.email && x.password == reqObject.password
    );

    if (!user) {
      return NextResponse.json(
        { error: "User with this email and password not found" },
        { status: 400 }
      );
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return new NextResponse(JSON.stringify({ user, token }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function authMiddleware(req: Request) {
  const reqObject = await req.json();
  const token = reqObject.headers.get("Authorization");

  if (!token) {
    return new NextResponse(
      JSON.stringify({ error: "Authorization token missing" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET) as JwtPayload;
    reqObject.userId = decodedToken.userId;
    return null;
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Invalid token" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
