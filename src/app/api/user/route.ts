"use server"
import { getServerSession } from "next-auth"

import prisma from "../../../../db";

import { revalidateTag } from "next/cache";




export async function getDonationDetails() {
  const session = await getServerSession();
  const response = await prisma.donerInfo.findMany({
    where: {
      //@ts-ignore
      userId: session?.user?.id
    },
    select: {
      amount: true
    }
  })
  return response
}

export async function writeMessage(message: string, section: boolean, id: number) {
  const response = await prisma.scholarInfo.update({
    where: {
      userId: id
    },
    data: {
      message: message,
      section: section
    }
  })
  if (!response) {
    return false;
  }
  return true;
}

export async function getApplication(userId: any) {

  const response = await prisma.scholarInfo.findFirst({
    where: {
      userId: userId,
    }
  })
  return response;
}

export async function findallReview() {
  const res = await prisma.scholarInfo.findMany({
    where: {
      section: true
    },
    select: {
      message: true,
      image: true,
      name: true,
      surname: true
    }
  })
  return res;
}

export   async function reviewRevalidate() {
  revalidateTag('reviewResponse')
}