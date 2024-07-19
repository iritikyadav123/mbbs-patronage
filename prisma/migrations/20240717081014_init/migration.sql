/*
  Warnings:

  - Added the required column `ammount` to the `DonerInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DonerInfo" ADD COLUMN     "ammount" TEXT NOT NULL;
