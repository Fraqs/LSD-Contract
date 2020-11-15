import Flight from './Flight';
import FlightPassenger from '../passenger/FlightPassenger';
import { CarrierDetail } from '../carrier';
import { AirportIdentifier } from '../airport';

export default class FlightBookingDetail extends Flight {
	passengers: FlightPassenger[];

	constructor(
		id: string,
		carrier: CarrierDetail,
		departureDate: number,
		arrivalDate: number,
		departureAirport: AirportIdentifier,
		arrivalAirport: AirportIdentifier,
		passengers: FlightPassenger[]
	) {
		super(id, carrier, departureDate, arrivalDate, departureAirport, arrivalAirport);
		this.passengers = passengers;
	}
}
