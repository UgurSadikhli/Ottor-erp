import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
    try {
        const { id, name, surname, email, officialEmail, password, role, emailConfirmed, gender, phoneNumber, designation, profileImage } = await req.json();

        if (!id) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
        }

        if (!name && !surname && !email && !officialEmail && !password && !role && !emailConfirmed && !gender && !phoneNumber && !designation && !profileImage) {
            return NextResponse.json({ error: 'No fields to update provided in request body' }, { status: 400 });
        }

        const dataToUpdate: { [key: string]: any } = {};
        if (name) dataToUpdate['name'] = name;
        if (surname) dataToUpdate['surname'] = surname;
        if (email) dataToUpdate['email'] = email;
        if (officialEmail) dataToUpdate['officialEmail'] = officialEmail;
        if (password) dataToUpdate['password'] = password;
        if (role) dataToUpdate['role'] = role;
        if (emailConfirmed !== undefined) dataToUpdate['emailConfirmed'] = emailConfirmed;
        if (gender) dataToUpdate['gender'] = gender;
        if (phoneNumber) dataToUpdate['phoneNumber'] = phoneNumber;
        if (designation) dataToUpdate['designation'] = designation;
        if (profileImage) dataToUpdate['profileImage'] = profileImage;

        const updatedUser = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: dataToUpdate
        });

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.error('Error handling request:', error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}
