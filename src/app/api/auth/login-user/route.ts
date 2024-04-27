import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers'

const prisma = new PrismaClient();
const JWT_SECRET = "13KSKOA41OAQWJ11ID";

interface AuthenticatedRequest extends Request {
  userId?: number;
}

export async function POST(req: Request) {
  const reqObject = await req.json();

  try {
    if (!reqObject) {
      return NextResponse.json(
        { error: "Missing or invalid login data" },
        { status: 400 }
      );
    }

    if (!reqObject.email || !reqObject.password) {
      return NextResponse.json(
        { error: "Missing login data" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findFirst({
      where: {
        email: reqObject.email,
        password: reqObject.password,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User with this email and password not found" },
        { status: 400 }
      );
    }

    if (!user.emailConfirmed) {
      return NextResponse.json(
        { error: "Email is not confirmed" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    cookies().set('auth-token',token);

    return new NextResponse(JSON.stringify({ user, token }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function authMiddleware(req: AuthenticatedRequest) {
  const token = req.headers.get("Authorization");

  if (!token) {
    return new NextResponse(
      JSON.stringify({ error: "Authorization token missing" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET) as JwtPayload;
    const user = await prisma.user.findUnique({
      where: {
        id: decodedToken.userId,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    req.userId = user.id;
    return null;
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Invalid token" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
