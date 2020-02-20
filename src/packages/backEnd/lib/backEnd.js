"use strict";
exports.__esModule = true;
var BackEnd = /** @class */ (function () {
    function BackEnd(message) {
        this.greeting = message;
    }
    BackEnd.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return BackEnd;
}());
exports.BackEnd = BackEnd;
