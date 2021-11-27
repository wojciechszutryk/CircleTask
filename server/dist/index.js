"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const PORT = process.env.PORT || 5000;
const server = (0, express_1.default)();
mongoose_1.default.connect('mongodb+srv://admin:' + process.env.MONGODB_PW + '@cluster0.ooyuy.mongodb.net/circles?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose_1.default.Promise = global.Promise;
server.use((0, cors_1.default)({
    origin: "*"
}));
server.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});
server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map