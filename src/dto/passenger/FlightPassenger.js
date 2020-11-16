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
var Passenger_1 = __importDefault(require("./Passenger"));
var FlightPassenger = /** @class */ (function (_super) {
    __extends(FlightPassenger, _super);
    function FlightPassenger(firstName, lastName, pnr) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.pnr = pnr;
        return _this;
    }
    return FlightPassenger;
}(Passenger_1.default));
exports.default = FlightPassenger;
