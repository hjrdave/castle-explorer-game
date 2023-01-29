"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player() {
        var _this = this;
        this.sayName = function () { return (_this.name); };
        this.setName = function (name) {
            name = _this.name;
        };
        this.name = '';
        this.inv = [];
    }
    return Player;
}());
exports.default = Player;
