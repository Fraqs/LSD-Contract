export default class CarrierDetail {
	readonly iata: string;
	readonly name: string;

	constructor(iata: string, name: string) {
		this.iata = iata;
		this.name = name;
	}
}
