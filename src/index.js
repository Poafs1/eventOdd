"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOdd = exports.isEvent = exports.eventOdd = void 0;
var eventOdd = function (num) { return (num % 2 === 0 ? 'EVENT!' : 'ODD!'); };
exports.eventOdd = eventOdd;
var isEvent = function (num) { return num % 2 === 0; };
exports.isEvent = isEvent;
var isOdd = function (num) { return num % 2 !== 0; };
exports.isOdd = isOdd;
