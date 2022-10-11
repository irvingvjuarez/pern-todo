"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const globals_1 = require("./globals");
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
(0, middlewares_1.useMiddlewares)(app);
app.get("/ping", (_req, res) => {
    res.send("Pong");
});
app.listen(globals_1.PORT, () => {
    console.log(`Listening at http://localhost:${globals_1.PORT}`);
});
