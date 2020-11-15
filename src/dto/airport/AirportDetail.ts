import AirportIdentifier from './AirportIdentifier';

export default class AirportDetail extends AirportIdentifier {
	readonly name: string;
	readonly timeZone: string;

	constructor(iata: string, name: string, timeZone: string) {
		super(iata);
		this.name = name;
		this.timeZone = timeZone;
	}
}
