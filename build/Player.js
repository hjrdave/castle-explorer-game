"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(props) {
        var _this = this;
        this.sayName = function () { return (_this.name); };
        this.setName = function (name) {
            name = _this.name;
        };
        this.name = props.name;
        this.inv = props.inv;
    }
    return Player;
}());
exports.default = Player;
