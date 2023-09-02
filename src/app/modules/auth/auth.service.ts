import { User } from '@prisma/client';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';

const insertAuthDB = async (data: any): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });

  return result;
};
const login = async (data: {
  email: string;
  password: string;
}): Promise<any> => {
  const result = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }
  if (!(result?.password === data.password)) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'password is not match');
  }

  const { role, email, id } = result;
  const accessToken = jwtHelpers.createToken(
    { role, email, id },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  const refreshToken = jwtHelpers.createToken(
    { role, email, id },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );
  return {
    accessToken,
    refreshToken,
  };
};
const refreshToken = async (refreshTokens: string): Promise<any> => {
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      refreshTokens,
      config.jwt.refresh_secret as Secret
    );
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
  }
  console.log(verifiedToken, '9999999999999999999999');
  const { email } = verifiedToken;
  const result = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  const { role } = result;
  const newAccessToken = jwtHelpers.createToken(
    { role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};
const getAllFromDB = async (): Promise<User[]> => {
  const result = await prisma.user.findMany({});

  return result;
};

const getDataById = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateOneInDB = async (
  id: string,
  payload: Partial<User>
): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteByIdFromDB = async (id: string): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};

export const AuthService = {
  insertAuthDB,
  getAllFromDB,
  deleteByIdFromDB,
  updateOneInDB,
  getDataById,
  login,
  refreshToken,
};
