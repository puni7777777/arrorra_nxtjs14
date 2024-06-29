import prisma from "../lib/prisma";
import { v4 as uuidv4 } from 'uuid'

export async function CreateUser({ name, email, password }) {
    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        })
        return newUser
    } catch (error) {
        console.error('Something went wrong', error)
        throw error
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
        console.error('error getting user email', error)
        throw error
    }
}