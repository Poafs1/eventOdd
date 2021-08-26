"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eventOdd = function (num) {
    if (isEvent(num)) {
        return 'Is event number.';
    }
    else {
        return 'Is odd number.';
    }
};
var isEvent = function (num) { return num % 2 === 0; };
var isOdd = function (num) { return num % 2 !== 0; };
exports.default = {
    eventOdd: eventOdd,
    isEvent: isEvent,
    isOdd: isOdd,
};
