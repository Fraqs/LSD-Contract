import IFlightBookingDetail from '../flight/IFlightBookingDetail';

import IBookingIdentifier from './IBookingIdentifier';

export default interface IBookingDetail extends IBookingIdentifier {
	readonly frequentFlyerId: string;
	readonly creditCardNumber: number;
	readonly price: number;
	readonly flightBookings: IFlightBookingDetail[];
}
