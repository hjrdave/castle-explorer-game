"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var wordArt_1 = require("./wordArt");
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var prompt = (0, prompt_sync_1.default)();
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.gameOver = wordArt_1.gameOver;
        this.ask = function (question, expectedFeedback) {
            var answer = prompt(question);
            if (!expectedFeedback.includes(answer)) {
                _this.speak('I did not understand your answer...');
                _this.ask(question, expectedFeedback);
            }
            return answer;
        };
        this.speak = function (text) {
            console.log("\n\n    ".concat(text, "\n        \n        "));
        };
        this.startGame = function () {
            _this.speak(wordArt_1.title);
            _this.speak(wordArt_1.startDescription);
            var answer = _this.ask('Start Game? (Yes/No)', ['Yes', 'No']);
            if (answer === 'Yes') {
                _this.speak('Starting game.......');
            }
            else {
                _this.speak('That makes me sad.......');
            }
        };
        this.end = function () {
            process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
            _this.speak(_this.gameOver);
        };
    }
    return Game;
}());
exports.default = Game;
