import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.get('/users', AuthController.getAllFromDB);
router.get('/users/:id', AuthController.getDataById);

router.post(
  '/auth/signup',
  // validateRequest(AcademicFacultyValidation.create),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AuthController.insertAuth
);

router.patch(
  '/users/:id',

  AuthController.updateOneInDB
);

router.delete('/users/:id', AuthController.deleteByIdFromDB);

export const authRoutes = router;
