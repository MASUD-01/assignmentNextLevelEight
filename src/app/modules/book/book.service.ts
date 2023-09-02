import {
  IGenericResponse,
  IGenericResponseMetaData,
} from './../../../interfaces/common';
/* eslint-disable no-unused-vars */
import { Book, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { FilterableFieldType, bookSearchableFields } from './book.constant';

const insertDB = async (data: any): Promise<Book> => {
  const result = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });

  return result;
};
const getAllFromDB = async (
  filters: Partial<FilterableFieldType>,
  options: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { search, category, ...filterData } = filters;
  const andConditions = [];

  if (search) {
    andConditions.push({
      OR: bookSearchableFields.map(field => ({
        [field]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  if (category) {
    andConditions.push({
      AND: [
        {
          category: {
            id: {
              equals: category,
            },
          },
        },
      ],
    });
  }

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.book.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },

    include: {
      category: true,
    },
  });
  const total = await prisma.book.count({
    where: whereConditions,
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};
const getBookByCategoryId = async (
  id: string
): Promise<IGenericResponseMetaData<Book[] | null>> => {
  const result = await prisma.book.findMany({
    where: {
      category: {
        id,
      },
    },
  });

  console.log(result);
  const total = await prisma.book.count({
    where: {
      category: {
        id,
      },
    },
  });
  return {
    meta: {
      total,
      page: 1,
      totalPage: 10,
      size: 10,
    },
    data: result,
  };
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
  getBookByCategoryId,
};
