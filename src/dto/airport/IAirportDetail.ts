import IAirportIdentifier from './IAirportIdentifier';

export default interface IAirportDetail extends IAirportIdentifier {
	readonly name: string;
	readonly timeZone: string;
}
