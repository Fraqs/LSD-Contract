import IFlightIdentifier from './IFlightIdentifier';
import { Moment } from 'moment-timezone';
import ICarrierDetail from '../carrier/ICarrierDetail';
import IFlight from './IFlight';

export default interface IFlightSummary extends IFlight {
	availableSeats: number;
	seatPrice: number;
}
