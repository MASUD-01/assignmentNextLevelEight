import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';

const insertDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.insertDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrieved  successfully',
    data: result,
  });
});
const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getDataById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrieved  successfully',
    data: result,
  });
});
const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryService.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category updated  successfully',
    data: result,
  });
});
const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.deleteByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category deleted  successfully',
    data: result,
  });
});

export const CategoryController = {
  insertDB,
  getAllFromDB,
  deleteByIdFromDB,
  updateOneInDB,
  getDataById,
};
