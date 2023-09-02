import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertDB = async (data: any): Promise<any> => {
  const result = await prisma.order.create({
    data,
  });

  return result;
};
const getAllFromDB = async (req: {
  role: string;
  email: string;
  id: string;
  iat: number;
  exp: number;
}): Promise<Order[]> => {
  const { role, id } = req;
  console.log(role, id);
  const result = await prisma.order.findMany({
    // Specify the type explicitly
    where: role === 'admin' ? {} : { userId: id },
  });

  return result;
};

const getDataById = async (id: string): Promise<Order | null> => {
  const result = await prisma.order.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const deleteByIdFromDB = async (id: string): Promise<Order> => {
  const result = await prisma.order.delete({
    where: {
      id,
    },
  });
  return result;
};

export const OrderService = {
  insertDB,
  getAllFromDB,
  deleteByIdFromDB,
  getDataById,
};
