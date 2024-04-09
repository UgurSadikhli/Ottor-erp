import db from '../../../../../db.json';
import { User } from '@/models/User';
import { v4 as uuidv4 } from 'uuid';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
    const reqObject = await req.json();

    try {
        if (!reqObject) {
            return Response.json({ status: 400, json: { error: 'Missing or invalid registration data' } });
        }

        const users = db.users;

        if (!reqObject.name || !reqObject.surname || !reqObject.email || !reqObject.password) {
            return Response.json({ status: 400, json: { error: 'Missing registration data' } });
        }

        if (users.find((x) => x.email == reqObject.email)) {
            return Response.json({ status: 400, json: { error: 'User with this email already exists' } });
        }

        const newUser: User = {
            id: uuidv4(),
            name: reqObject.name,
            surname: reqObject.surname,
            email: reqObject.email,
            password: reqObject.password
        };

        db.users.push(newUser);

        return new Response(JSON.stringify(newUser), {
            headers: {
                "Content-Type": "application/json",
            },
            status: 201,
        });
    } catch (error) {
        return Response.json({ status: 500, json: { error: 'An error occurred' } });
    }
}

export async function GET(req: NextRequest) {
    try {
        const users = db.users;
        return NextResponse.json({ status: 200, json: { users } });
    } catch (error) {
        return NextResponse.json({ status: 500, json: { error: 'An error occurred' } });
    }
}