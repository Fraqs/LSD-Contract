import Passenger from '../passenger/Passenger';
import ReservationIdentifier from './ReservationIdentifier';
export default class ReservationDetail extends ReservationIdentifier {
    readonly passengers: Passenger[];
    constructor(id: string, passengers: Passenger[]);
}
//# sourceMappingURL=ReservationDetail.d.ts.map