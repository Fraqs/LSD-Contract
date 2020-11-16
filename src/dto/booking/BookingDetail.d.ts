import FlightBookingDetail from '../flight/FlightBookingDetail';
import BookingIdentifier from './BookingIdentifier';
export default class BookingDetail extends BookingIdentifier {
    readonly frequentFlyerId: string;
    readonly creditCardNumber: number;
    readonly price: number;
    readonly flightBookings: FlightBookingDetail[];
    constructor(id: string, frequentFlyerId: string, creditCardNumber: number, price: number, flightBookings: FlightBookingDetail[]);
}
//# sourceMappingURL=BookingDetail.d.ts.map