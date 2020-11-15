import Passenger from './Passenger';

export default class FlightPassenger extends Passenger {
	readonly pnr: string;

	constructor(firstName: string, lastName: string, pnr: string) {
		super(firstName, lastName);
		this.pnr = pnr;
	}
}
