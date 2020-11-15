export default class CarrierDetail {
	iata: string;
	name: string;

	constructor(iata: string, name: string) {
		this.iata = iata;
		this.name = name;
	}
}
