import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.get('/', CategoryController.getAllFromDB);
router.get('/:id', CategoryController.getDataById);

router.post(
  '/create-category',
  // validateRequest(AcademicFacultyValidation.create),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CategoryController.insertDB
);

router.patch(
  '/:id',

  CategoryController.updateOneInDB
);

router.delete('/:id', CategoryController.deleteByIdFromDB);

export const categoryRoutes = router;
