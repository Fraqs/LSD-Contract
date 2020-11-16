import { AirportIdentifier } from '../airport';
import { CarrierDetail } from '../carrier';
import Flight from './Flight';
export default class FlightSummary extends Flight {
    readonly availableSeats: number;
    readonly seatPrice: number;
    constructor(id: string, carrier: CarrierDetail, departureDate: number, arrivalDate: number, departureAirport: AirportIdentifier, arrivalAirport: AirportIdentifier, availableSeats: number, seatPrice: number);
}
//# sourceMappingURL=FlightSummary.d.ts.map