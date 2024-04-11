// import db from "../../../../../db.json";
// import { User } from "@/models/User";
// import { v4 as uuidv4 } from "uuid";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const reqObject = await req.json();

//   try {
//     if (!reqObject) {
//       return NextResponse.json(
//         { error: "Missing or invalid registration data" },
//         { status: 400 }
//       );
//     }

//     const users = db.users;

//     if (
//       !reqObject.name ||
//       !reqObject.surname ||
//       !reqObject.email ||
//       !reqObject.password
//     ) {
//       return NextResponse.json(
//         { error: "Missing registration data" },
//         { status: 400 }
//       );
//     }

//     if (users.find((x) => x.email == reqObject.email)) {
//       return NextResponse.json(
//         { error: "User with this email already exists" },
//         { status: 400 }
//       );
//     }

//     const newUser: User = {
//       id: uuidv4(),
//       name: reqObject.name,
//       surname: reqObject.surname,
//       email: reqObject.email,
//       password: reqObject.password,
//     };

//     db.users.push(newUser);

//     return NextResponse.json(newUser, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: "An error occurred" }, { status: 500 });
//   }
// }

// export async function GET(req: NextRequest) {
//   try {
//     const users = db.users;
//     return NextResponse.json({ users }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "An error occurred" }, { status: 500 });
//   }
// }
