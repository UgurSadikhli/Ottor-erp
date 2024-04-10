import {
  createTable,
  insertIntoTable,
} from "@/services/UserDBService";
import { User } from "@/models/User";
import { NextResponse } from "next/server";
import { generateOTP, sendOTP } from "@/services/OtpService";
import { randomUUID } from "crypto";

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("otor.db", sqlite3.OPEN_READWRITE, (err: Error) => {
  if (err) return console.error(err.message);
}); 

export async function POST(req: Request) {
  const reqObject = await req.json();

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

    db.OPEN_READWRITE;

    const users = await new Promise((resolve, reject) => {
      db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
          reject(err);
          return console.error('Error fetching users:', err.message);
        }
        resolve(rows);
      });
    });
    if (users.some((user: User) => user.email === reqObject.email)) {
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

    db.OPEN_READWRITE;
    await insertIntoTable(newUser.id, newUser.name, newUser.surname, newUser.email, newUser.password);

    const otp = generateOTP(6);
    sendOTP(newUser.email, otp);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const users = await new Promise((resolve, reject) => {
      db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
          reject(err);
          return console.error('Error fetching users:', err.message);
        }
        resolve(rows);
      });
    });

    if ((users as User[]).length === 0) {
      console.log('No users found in the database.');
      return NextResponse.json({ message: 'No users found' }, { status: 200 });
    }

    console.log('Users fetched successfully:', users as User[]);
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  } finally {
    db.close((err: Error) => {
      if (err) console.error('Error closing database connection:', err.message);
    });
  }
}