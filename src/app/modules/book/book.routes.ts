import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { BookController } from './book.controller';

const router = express.Router();

router.get('/', BookController.getAllFromDB);
router.get('/:id/category', BookController.getBookByCategoryId);
router.get('/:id', BookController.getDataById);

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.insertDB
);

router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.updateOneInDB);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.deleteByIdFromDB
);

export const bookRoutes = router;
