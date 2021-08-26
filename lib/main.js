"use strict";
exports.__esModule = true;
var eventOdd = function (num) {
    if (isEvent(num)) {
        console.log('Is event number.');
    }
    else {
        console.log('Is odd number.');
    }
};
var isEvent = function (num) { return num % 2 == 0; };
var isOdd = function (num) { return num % 2 != 0; };
exports["default"] = {
    eventOdd: eventOdd,
    isEvent: isEvent,
    isOdd: isOdd
};
