import { User } from "@/models/User";
import { v4 as uuidv4 } from "uuid";
import db from "../../../../../db.json";

export async function POST(req: Request) {
  const reqObject = await req.json();

  try {
    if (!reqObject) {
      return Response.json({ status: 400, json: { error: "Missing or invalid login data" } });
    }

    const users = db.users;

    if (!reqObject.email || !reqObject.password) {
      return Response.json({ status: 400, json: { error: "Missing login data" } });
    }

    const user = users.find((x) => x.email == reqObject.email && x.password == reqObject.password);

    if (!user) {
      return Response.json({ status: 400, json: { error: "User with this email and password not found" } });
    }

    return new Response(JSON.stringify(user), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 200,
    });
  } catch (error) {
    return Response.json({ status: 500, json: { error: "An error occurred" } });
  }
}