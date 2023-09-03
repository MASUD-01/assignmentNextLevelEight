"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.create({
        data,
    });
    return result;
});
const getAllFromDB = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { role, id } = req;
    console.log(role, id);
    const result = yield prisma_1.default.order.findMany({
        // Specify the type explicitly
        where: role === 'admin' ? {} : { userId: id },
    });
    return result;
});
const getDataById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const deleteByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.OrderService = {
    insertDB,
    getAllFromDB,
    deleteByIdFromDB,
    getDataById,
};
