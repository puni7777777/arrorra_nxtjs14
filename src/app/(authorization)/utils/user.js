import prisma from "../lib/prisma";
import { v4 as uuidv4 } from 'uuid'

export async function CreateUser({ name, email, password }) {
    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password,
                accounts: {
                    create: {
                        type: "credentials",
                        provider: "email",
                        providerAccountId: uuidv4(),
                    },
                },
            },
            include: {
                accounts: true,
            }
        })
        return newUser;
    } catch (error) {
        return ('Something went wrong', error)
    }
}

export async function getUserbyEmail({ email }) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        })
        return user
    } catch (error) {
        return ('error getting user email', error)
    }
}