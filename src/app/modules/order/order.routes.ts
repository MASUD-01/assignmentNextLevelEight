import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.get('/', OrderController.getAllFromDB);
router.get('/:id', OrderController.getDataById);

router.post(
  '/create-order',
  // validateRequest(AcademicFacultyValidation.create),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OrderController.insertDB
);

router.delete('/:id', OrderController.deleteByIdFromDB);

export const orderRoutes = router;
