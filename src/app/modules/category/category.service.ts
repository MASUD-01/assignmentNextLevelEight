import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertDB = async (data: any): Promise<any> => {
  const result = await prisma.category.create({
    data,
  });

  return result;
};
const getAllFromDB = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany({});

  return result;
};

const getDataById = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<Category>
): Promise<Category> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Category> => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CategoryService = {
  insertDB,
  getAllFromDB,
  deleteByIdFromDB,
  updateOneInDB,
  getDataById,
};
