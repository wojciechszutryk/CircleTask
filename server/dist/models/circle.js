"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleObject = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const circleObject = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    position: mongoose_1.default.Schema.Types.Number,
    text: mongoose_1.default.Schema.Types.String,
    color: mongoose_1.default.Schema.Types.String,
});
const CircleObject = mongoose_1.default.model('circleObject', circleObject);
exports.CircleObject = CircleObject;
//# sourceMappingURL=circle.js.map