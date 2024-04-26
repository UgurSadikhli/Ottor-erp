import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
    const reqObject = await req.json();

    try {
        const user = await prisma.user.findUnique({
            where: {
              id: reqObject.id,
            },
          });
      
          if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 500 });
          }
      
          await prisma.user.delete({
            where: {
              id: reqObject.id,
            },
          });

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json({ error: 'Error deleting user' }, { status: 500 });
    }
}
