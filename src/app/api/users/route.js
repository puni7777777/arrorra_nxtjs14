import { CreateUser, getUserbyEmail } from "@/app/(authorization)/utils/user";
import { NextResponse } from "next/server";
import sha256 from 'js-sha256'

export const POST = async (req, res) => {
    try {
        const [name, email, password] = await req.json()

        const existingUser =await getUserbyEmail(email)
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, 400)
        }

        const hashedpassword = sha256(password)
        const newUser = await CreateUser({
            name,
            email,
            password: hashedpassword
        })

        return NextResponse.json({
            message: "User created successfully",
            data: {
                ...newUser
            }
        }, 500)

    } catch (error) {
        return NextResponse.json({
            message: 'error',
            err
        }, 201)
    }
}