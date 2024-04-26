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
      !reqObject.designation ||
      !reqObject.phoneNumber ||
      !reqObject.officialEmail ||
      !reqObject.gender ||
      !reqObject.role
    ) {
      return NextResponse.json(
        { error: "Missing or invalid creation data" },
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

    const randomPassword: string = generatePassword();

    const newUser = await prisma.user.create({
      data: {
        name: reqObject.name,
        surname: reqObject.surname,
        email: reqObject.email,
        officialEmail: reqObject.officialEmail,
        password: randomPassword,
        role: reqObject.role,
        phoneNumber: reqObject.phoneNumber,
        designation: reqObject.designation,
        gender: reqObject.gender
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

function generatePassword(length: number = 8): string {
  const characters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
  let password: string = '';

  for (let i = 0; i < length; i++) {
      const randomIndex: number = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
  }

  return password;
}
