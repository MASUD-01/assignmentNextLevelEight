import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { BookController } from './book.controller';

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.CUSTOMER), BookController.getAllFromDB);
router.get('/:id/category', BookController.getBookByCategoryId);
router.get('/:id', BookController.getDataById);

router.post(
  '/create-book',
  // validateRequest(AcademicFacultyValidation.create),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  BookController.insertDB
);

router.patch(
  '/:id',

  BookController.updateOneInDB
);

router.delete('/:id', BookController.deleteByIdFromDB);

export const bookRoutes = router;
