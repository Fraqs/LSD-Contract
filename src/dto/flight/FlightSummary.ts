import { AirportIdentifier } from '../airport';
import { CarrierDetail } from '../carrier';
import Flight from './Flight';

export default class FlightSummary extends Flight {
	availableSeats: number;
	seatPrice: number;

	constructor(
		id: string,
		carrier: CarrierDetail,
		departureDate: number,
		arrivalDate: number,
		departureAirport: AirportIdentifier,
		arrivalAirport: AirportIdentifier,
		availableSeats: number,
		seatPrice: number
	) {
		super(id, carrier, departureDate, arrivalDate, departureAirport, arrivalAirport);
		this.availableSeats = availableSeats;
		this.seatPrice = seatPrice;
	}
}
