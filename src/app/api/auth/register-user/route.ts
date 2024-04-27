import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const reqObject = await req.json();
  
  try {
    if (
      !reqObject ||
      !reqObject.name ||
      !reqObject.surname ||
      !reqObject.email ||
      !reqObject.officialEmail ||
      !reqObject.password ||
      !reqObject.designation ||
      !reqObject.phoneNumber ||
      !reqObject.gender
    ) {
      return NextResponse.json(
        { error: "Missing or invalid registration data" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: reqObject.email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        name: reqObject.name,
        surname: reqObject.surname,
        email: reqObject.email,
        password: reqObject.password,
        role: 'ADMIN',
        officialEmail: reqObject.officialEmail,
        phoneNumber: reqObject.phoneNumber,
        designation: reqObject.designation,
        gender: reqObject.gender,
        profileImage: reqObject.profileImage
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
