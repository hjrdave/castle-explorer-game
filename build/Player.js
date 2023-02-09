"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player() {
        var _this = this;
        this.setName = function (name) {
            name = _this.name;
        };
        this.sayName = function () { return (_this.name); };
        this.pickupItem = function () {
        };
        this.viewInventory = function () {
        };
        this.dropItem = function () {
        };
        this.lookAround = function () {
        };
        this.name = '';
    }
    return Player;
}());
exports.default = Player;
