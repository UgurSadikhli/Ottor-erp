import { NextResponse } from "next/server";
import fs from "fs";
import { cookies } from 'next/headers'


const dbPath = "db.json";

export async function POST(req: Request) {
    const reqObject = await req.json();
    const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

    try {
        cookies().delete('auth-token');

        return new NextResponse(null, {
            headers: {
                "Content-Type": "application/json",
            },
            status: 200,
        });

    } catch (error) {
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}