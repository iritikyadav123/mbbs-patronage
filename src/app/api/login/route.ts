
"use server"

import prisma from "../../../../db";

export const userLogin = async (username: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: username,
        }
    })
    if (user) {
        if (user.password !== password) {
            return 1;
        }
        return 2
    }
    return 3;
}