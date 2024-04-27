import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function POST(req: Request) {
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