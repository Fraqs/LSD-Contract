import IPassenger from './IPassenger';

export default interface IFlightPassenger extends IPassenger {
	readonly pnr: string;
}
