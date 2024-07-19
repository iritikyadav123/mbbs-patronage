/*
  Warnings:

  - Added the required column `message` to the `ScholarInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ScholarInfo" ADD COLUMN     "message" TEXT NOT NULL;
