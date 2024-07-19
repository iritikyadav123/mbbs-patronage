
"use server"

import prisma from "../../../../db";

export const userSignup = async (username: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: username,
        }
    })
    if (user) {

        return false
    }
    await prisma.user.create({
        data: {
            email: username,
            password: password
        }
    })
    return true;
}