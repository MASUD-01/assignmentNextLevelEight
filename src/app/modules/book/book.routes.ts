import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.get('/', BookController.getAllFromDB);
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
