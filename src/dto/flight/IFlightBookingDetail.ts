import IFlight from './IFlight';
import IFlightPassenger from '../passenger/IFlightPassenger';

export default interface IFlightBookingDetail extends IFlight {
	readonly passengers: IFlightPassenger[];
}
