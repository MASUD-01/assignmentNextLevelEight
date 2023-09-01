/*
  Warnings:

  - Made the column `author` on table `books` required. This step will fail if there are existing NULL values in that column.
  - Made the column `categoryId` on table `books` required. This step will fail if there are existing NULL values in that column.
  - Made the column `genre` on table `books` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `books` required. This step will fail if there are existing NULL values in that column.
  - Made the column `publicationDate` on table `books` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "books" ALTER COLUMN "author" SET NOT NULL,
ALTER COLUMN "categoryId" SET NOT NULL,
ALTER COLUMN "genre" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "publicationDate" SET NOT NULL,
ALTER COLUMN "publicationDate" SET DATA TYPE TEXT;
