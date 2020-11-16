import IReservationIdentifier from './IReservationIdentifier';

export default interface IReservationSummary extends IReservationIdentifier {
	readonly price: number;
}
