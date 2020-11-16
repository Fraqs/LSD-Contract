"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FlightIdentifier_1 = __importDefault(require("./FlightIdentifier"));
var Flight = /** @class */ (function (_super) {
    __extends(Flight, _super);
    function Flight(id, carrier, departureDate, arrivalDate, departureAirport, arrivalAirport) {
        var _this = _super.call(this, id) || this;
        _this.carrier = carrier;
        _this.departureDate = departureDate;
        _this.arrivalDate = arrivalDate;
        _this.departureAirport = departureAirport;
        _this.arrivalAirport = arrivalAirport;
        return _this;
    }
    return Flight;
}(FlightIdentifier_1.default));
exports.default = Flight;
