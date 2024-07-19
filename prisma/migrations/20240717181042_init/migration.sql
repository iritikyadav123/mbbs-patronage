/*
  Warnings:

  - Changed the type of `fund` on the `Organization` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "fund",
ADD COLUMN     "fund" INTEGER NOT NULL;
