import ReservationIdentifier from './ReservationIdentifier';

export default class ReservationSummary extends ReservationIdentifier {
	price: number;

	constructor(id: string, price: number) {
		super(id);
		this.price = price;
	}
}
