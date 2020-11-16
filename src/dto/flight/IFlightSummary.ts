import IFlight from './IFlight';

export default interface IFlightSummary extends IFlight {
	readonly availableSeats: number;
	readonly seatPrice: number;
}
