"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.InvalidInputError = exports.InconsistentLengthErrorClass = void 0;
var InconsistentLengthError_1 = require("./InconsistentLengthError");
Object.defineProperty(exports, "InconsistentLengthErrorClass", { enumerable: true, get: function () { return __importDefault(InconsistentLengthError_1).default; } });
var InvalidInputError_1 = require("./InvalidInputError");
Object.defineProperty(exports, "InvalidInputError", { enumerable: true, get: function () { return __importDefault(InvalidInputError_1).default; } });
var NotFoundError_1 = require("./NotFoundError");
Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function () { return __importDefault(NotFoundError_1).default; } });
// import InconsistentLengthErrorClass from './InconsistentLengthError';
// import InvalidInputErrorClass from './InvalidInputError';
// import NotFoundErrorClass from './NotFoundError';
// export class InconsistentLengthError extends InconsistentLengthErrorClass {
// 	constructor(msg: string) {
// 		super(msg);
// 	}
// }
// export class InvalidInputError extends InvalidInputErrorClass {
// 	constructor(msg: string) {
// 		super(msg);
// 	}
// }
// export class NotFoundError extends NotFoundErrorClass {
// 	constructor(msg: string) {
// 		super(msg);
// 	}
// }
