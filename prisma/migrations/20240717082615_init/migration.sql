/*
  Warnings:

  - You are about to drop the column `ammount` on the `DonerInfo` table. All the data in the column will be lost.
  - Added the required column `amount` to the `DonerInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DonerInfo" DROP COLUMN "ammount",
ADD COLUMN     "amount" TEXT NOT NULL,
ADD COLUMN     "organizationId" INTEGER;

-- AlterTable
ALTER TABLE "ScholarInfo" ADD COLUMN     "organizationId" INTEGER;

-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "fund" TEXT NOT NULL,
    "donorCount" INTEGER NOT NULL,
    "scholarCount" INTEGER NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DonerInfo" ADD CONSTRAINT "DonerInfo_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScholarInfo" ADD CONSTRAINT "ScholarInfo_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;
