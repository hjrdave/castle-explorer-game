"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var Player_1 = __importDefault(require("./Player"));
var player = new Player_1.default({ name: '', inv: [] });
console.log("\nThis is Castle Explorer the Game!\nThe scariest game in the world!\nWhat is your name?\n");
var name = readline_sync_1.default.prompt();
player.setName(name);
console.log("Hello ".concat(name));
