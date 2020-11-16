import ICarrierDetail from '../carrier/ICarrierDetail';
import IAirportIdentifier from '../airport/IAirportIdentifier';
import IFlightIdentifier from './IFlightIdentifier';

export default interface IFlight extends IFlightIdentifier {
	readonly carrier: ICarrierDetail;

	readonly departureDate: number;
	readonly arrivalDate: number;

	readonly departureAirport: IAirportIdentifier;
	readonly arrivalAirport: IAirportIdentifier;
}
