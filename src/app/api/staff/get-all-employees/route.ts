import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        const users = await prisma.user.findMany({
            where: {
                role: {
                    not: 'ADMIN'
                }
            }
        });

        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error('Error retrieving users:', error);
        return NextResponse.json({ error: 'Error retrieving users' }, { status: 500 });
    }
}
