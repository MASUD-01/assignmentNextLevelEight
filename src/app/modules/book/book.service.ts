import { Book } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertDB = async (data: any): Promise<Book> => {
  const result = await prisma.book.create({
    data,
  });

  return result;
};
const getAllFromDB = async (): Promise<Book[]> => {
  const result = await prisma.book.findMany({});

  return result;
};

const getDataById = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<Book>
): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Book> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BookService = {
  insertDB,
  getAllFromDB,
  deleteByIdFromDB,
  updateOneInDB,
  getDataById,
};
