"use server"
import prisma from "../../../../db";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

interface DonationProp {
    name: string;
    surname: string;
    amount: string;
    message: string;
    address: string;
}

export async function submitDonation({ donerData }: { donerData: any }) {
    const session = await getServerSession();
    const userEmail = session?.user?.email;

    if (!userEmail) {
        throw new Error("User is not authenticated");
    }

    const user = await prisma.user.findFirst({
        where: {
            email: userEmail.toString(),
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    const donation = await prisma.donerInfo.create({
        data: {
            name: donerData.name,
            surname: donerData.surname,
            address: donerData.address,
            amount: donerData.amount,
            message: donerData.message,
            userId: user.id,
        },
    });
    return donation.name;
      
}

export async function getDonors() {

    try {
      const donorData = await prisma.donerInfo.findMany({
        select: {
          id: true,
          name: true,
          surname: true,
          amount: true,
          message: true,
        },
      });
  
      return donorData;
    } catch (error) {
      console.error("Error fetching donors:", error);
      throw new Error("Failed to fetch donors");
    }
  }
 

  export   async function revalidate() {
    revalidateTag('donorData')
  }