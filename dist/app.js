"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
let win;
function createWindow() {
    win = new electron_1.BrowserWindow({
        height: 800,
        webPreferences: {
            nodeIntegration: false,
        },
        width: 1000,
    });
    win.loadFile(path_1.default.resolve('./dist/index.html'));
}
electron_1.app.on('ready', createWindow);
