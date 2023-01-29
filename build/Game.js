"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var wordArt_1 = require("./wordArt");
var Player_1 = __importDefault(require("./Player"));
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.setPlayerName = function (name) {
            _this.player.setName(name);
        };
        this.getPlayerName = function () {
            return _this.player.sayName();
        };
        this.ask = function (question, expectedFeedback) {
            var prompt = (0, prompt_sync_1.default)();
            var answer = prompt(question);
            if (expectedFeedback) {
                if (!expectedFeedback.includes(answer)) {
                    _this.speak('I did not understand your answer...');
                    _this.ask(question, expectedFeedback);
                }
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
                var playerName = _this.ask('What is your name?', []);
                return playerName;
            }
            else {
                _this.speak('That makes me sad.......');
                _this.startGame();
            }
        };
        this.player = new Player_1.default();
    }
    return Game;
}());
exports.default = Game;
