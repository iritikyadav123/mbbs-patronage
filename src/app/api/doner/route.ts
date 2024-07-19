"use server"
import prisma from "../../../../db";
import { getServerSession } from "next-auth"

interface donationProp {
    name: string;
    surname: string;
    ammount: string;
    message: string;
    address: string;
}

export async function submitDonation({ donerData }: { donerData: donationProp }) {
    const session = await getServerSession();
    const userEmail = session?.user?.email;
    const user = await prisma.user.findUnique({
        where: {
            email: userEmail?.toString()
        }
    })

    const donation = await prisma.donerInfo.create({
        data: {
            name: donerData.name,
            surname: donerData.surname,
            address: donerData.surname,
            amount: donerData.ammount,
            message: donerData.message,
            userId: Number(user?.id)
        }
    })
    return donation.name;

}

export async function GetDonners() {
     const donnerData = await prisma.donerInfo.findMany({
        select : {
            id : true,
            name : true,
            surname : true,
            amount : true,
            message : true,
        }
     })
     return donnerData;
}