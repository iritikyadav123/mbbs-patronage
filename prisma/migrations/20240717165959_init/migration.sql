/*
  Warnings:

  - You are about to drop the column `organizationId` on the `DonerInfo` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `ScholarInfo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "DonerInfo" DROP CONSTRAINT "DonerInfo_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "ScholarInfo" DROP CONSTRAINT "ScholarInfo_organizationId_fkey";

-- AlterTable
ALTER TABLE "DonerInfo" DROP COLUMN "organizationId";

-- AlterTable
ALTER TABLE "ScholarInfo" DROP COLUMN "organizationId";
