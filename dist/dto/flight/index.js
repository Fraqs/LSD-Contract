"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightSummary = exports.FlightIdentifier = exports.FlightBookingDetail = exports.Flight = void 0;
// classes
var Flight_1 = require("./Flight");
Object.defineProperty(exports, "Flight", { enumerable: true, get: function () { return __importDefault(Flight_1).default; } });
var FlightBookingDetail_1 = require("./FlightBookingDetail");
Object.defineProperty(exports, "FlightBookingDetail", { enumerable: true, get: function () { return __importDefault(FlightBookingDetail_1).default; } });
var FlightIdentifier_1 = require("./FlightIdentifier");
Object.defineProperty(exports, "FlightIdentifier", { enumerable: true, get: function () { return __importDefault(FlightIdentifier_1).default; } });
var FlightSummary_1 = require("./FlightSummary");
Object.defineProperty(exports, "FlightSummary", { enumerable: true, get: function () { return __importDefault(FlightSummary_1).default; } });
