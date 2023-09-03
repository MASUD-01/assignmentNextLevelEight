"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
router.get('/users', 
/* auth(ENUM_USER_ROLE.ADMIN), */ auth_controller_1.AuthController.getAllFromDB);
router.get('/users/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), auth_controller_1.AuthController.getDataById);
router.post('/auth/signup', auth_controller_1.AuthController.insertAuth);
router.post('/auth/signin', auth_controller_1.AuthController.login);
router.post('/refresh-token', auth_controller_1.AuthController.refreshToken);
router.patch('/users/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), auth_controller_1.AuthController.updateOneInDB);
router.delete('/users/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), auth_controller_1.AuthController.deleteByIdFromDB);
exports.authRoutes = router;
