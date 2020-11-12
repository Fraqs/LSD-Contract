import { Moment } from 'moment-timezone';
import ICarrierDetail from '../carrier/ICarrierDetail';
import IAirportIdentifier from '../airport/IAirportIdentifier';
import IFlightIdentifier from './IFlightIdentifier';

export default interface IFlight extends IFlightIdentifier {
	carrier: ICarrierDetail;

	departureDate: Moment;
	arrivalDate: Moment;

	departureAirport: IAirportIdentifier;
	arrivalAirport: IAirportIdentifier;
}
