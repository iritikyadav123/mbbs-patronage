"use server"
import prisma from "../../../../db";
import { getServerSession } from "next-auth"
import { revalidateTag } from "next/cache";

interface stuProps {
    name: string,
    surname: string,
    neetRoll: string,
    neetScore: string
}

export async function stuRegister({ stuData, urls }: { stuData: stuProps, urls: any }) {
    const session = await getServerSession();
    const userEmail = session?.user?.email;
    const user = await prisma.user.findUnique({
        where: {
            email: userEmail?.toString()
        }
    })

    const registration = await prisma.scholarInfo.create({
        data: {
            name: stuData.name,
            surname: stuData.surname,
            neetRoll: stuData.neetRoll,
            neetScore: Number(stuData.neetScore),
            userId: Number(user?.id),
            image: urls
        }
    })
    return registration.name;


}

export default async function getStudentRegistration() {
    const response = await prisma.scholarInfo.findMany({
        where: {},
        select: {
            id: true,
            name: true,
            surname: true,
            image: true,
            neetRoll: true,
            neetScore: true
        }
    })
    return response;
}

export   async function stuRevalidate() {
    revalidateTag('stuApplication')
  }