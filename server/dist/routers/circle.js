"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const circle_1 = require("../controllers/circle");
const router = express_1.default.Router();
exports.router = router;
router.get('/', circle_1.circle_get_all);
router.post('/', circle_1.circle_create);
router.delete(`/:id`, circle_1.circle_delete);
//# sourceMappingURL=circle.js.map