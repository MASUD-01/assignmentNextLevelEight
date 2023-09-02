import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';

const insertAuth = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.insertAuthDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});
const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);
  const { refreshToken, ...others } = result;
  res.cookie('refreshToken', refreshToken);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login successfully',
    data: result,
  });
});
const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  console.log(refreshToken, 'refreshToken---------====');
  const result = await AuthService.refreshToken(refreshToken);
  res.cookie('refreshToken', refreshToken);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login successfully',
    data: result,
  });
});
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved  successfully',
    data: result,
  });
});
const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.getDataById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User getched successfully',
    data: result,
  });
});
const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AuthService.updateOneInDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated  successfully',
    data: result,
  });
});
const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.deleteByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted  successfully',
    data: result,
  });
});

export const AuthController = {
  insertAuth,
  getAllFromDB,
  deleteByIdFromDB,
  updateOneInDB,
  getDataById,
  login,
  refreshToken,
};
