import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { AuthController } from './auth.controller';

const router = express.Router();

router.get(
  '/users',
  /* auth(ENUM_USER_ROLE.ADMIN), */ AuthController.getAllFromDB
);
router.get(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AuthController.getDataById
);

router.post('/auth/signup', AuthController.insertAuth);
router.post('/auth/signin', AuthController.login);
router.post('/refresh-token', AuthController.refreshToken);

router.patch(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AuthController.updateOneInDB
);

router.delete(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AuthController.deleteByIdFromDB
);

export const authRoutes = router;
