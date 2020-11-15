import ICarrierDetail from '../carrier/ICarrierDetail';
import IAirportIdentifier from '../airport/IAirportIdentifier';
import IFlightIdentifier from './IFlightIdentifier';

export default interface IFlight extends IFlightIdentifier {
	carrier: ICarrierDetail;

	departureDate: number;
	arrivalDate: number;

	departureAirport: IAirportIdentifier;
	arrivalAirport: IAirportIdentifier;
}
