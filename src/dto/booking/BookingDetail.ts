import FlightBookingDetail from '../flight/FlightBookingDetail';

import BookingIdentifier from './BookingIdentifier';

export default class BookingDetail extends BookingIdentifier {
	frequentFlyerId: string;
	creditCardNumber: number;
	price: number;
	flightBookings: FlightBookingDetail[];

	constructor(id: string, frequentFlyerId: string, creditCardNumber: number, price: number, flightBookings: FlightBookingDetail[]) {
		super(id);
		this.frequentFlyerId = frequentFlyerId;
		this.creditCardNumber = creditCardNumber;
		this.price = price;
		this.flightBookings = flightBookings;
	}
}
