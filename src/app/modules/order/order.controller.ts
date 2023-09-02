import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';

const insertDB = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.insertDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  console.log(req.user, '----------user');
  const result = await OrderService.getAllFromDB(
    req?.user as {
      role: string;
      email: string;
      id: string;
      iat: number;
      exp: number;
    }
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'orders retrieved  successfully',
    data: result,
  });
});
const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getDataById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'orders retrieved  successfully',
    data: result,
  });
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.deleteByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order deleted  successfully',
    data: result,
  });
});

export const OrderController = {
  insertDB,
  getAllFromDB,
  deleteByIdFromDB,

  getDataById,
};
