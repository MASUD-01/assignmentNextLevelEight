/*
  Warnings:

  - You are about to drop the column `author` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `publicationDate` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `categories` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "author" TEXT,
ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "genre" TEXT,
ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "publicationDate" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "author",
DROP COLUMN "categoryId",
DROP COLUMN "createdAt",
DROP COLUMN "genre",
DROP COLUMN "price",
DROP COLUMN "publicationDate",
DROP COLUMN "updatedAt";
