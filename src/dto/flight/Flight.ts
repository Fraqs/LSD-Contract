import CarrierDetail from '../carrier/CarrierDetail';
import AirportIdentifier from '../airport/AirportIdentifier';
import FlightIdentifier from './FlightIdentifier';

export default class Flight extends FlightIdentifier {
	carrier: CarrierDetail;

	departureDate: number;
	arrivalDate: number;

	departureAirport: AirportIdentifier;
	arrivalAirport: AirportIdentifier;

	constructor(
		id: string,
		carrier: CarrierDetail,
		departureDate: number,
		arrivalDate: number,
		departureAirport: AirportIdentifier,
		arrivalAirport: AirportIdentifier
	) {
		super(id);

		this.carrier = carrier;
		this.departureDate = departureDate;
		this.arrivalDate = arrivalDate;
		this.departureAirport = departureAirport;
		this.arrivalAirport = arrivalAirport;
	}
}
