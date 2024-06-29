import { CreateUser, getUserbyEmail } from "@/app/(authorization)/utils/user";
import { NextResponse } from "next/server";
import sha256 from 'js-sha256';
import bcrypt from 'bcrypt'

export const POST = async (req, res) => {
    try {
        const { name, email, password } = await req.json()

        // try {
        //     const existingUser = await getUserbyEmail(email);
        //     if (existingUser) {
        //         return NextResponse.json({ message: "User already exists" }, { status: 400 });
        //     }
        // } catch (error) {
        //     console.error("Error checking if user exists:", error);
        //     return NextResponse.json({ error: 'i am from user mail', message: error.message }, { status: 500 });
        // }

        const hashedpassword = await bcrypt.hash(password, 10)
        try {
            const newUser = await CreateUser({
                name,
                email,
                password: hashedpassword,
            });

            return NextResponse.json({
                message: "User created successfully",
                data: {
                    ...newUser
                },
            }, { status: 201 });
        } catch (error) {
            return NextResponse.json({
                error: 'this is error from user',
                message: error.message,
            }, { status: 500 });
        }

    } catch (error) {
        return NextResponse.json({
            error: 'Internal Server outside error',
            message: error.message,
        }, { status: 500 })
    }
}
