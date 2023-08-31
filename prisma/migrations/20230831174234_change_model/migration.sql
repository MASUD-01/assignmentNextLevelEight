/*
  Warnings:

  - The `price` column on the `categories` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "author" TEXT,
DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION;
