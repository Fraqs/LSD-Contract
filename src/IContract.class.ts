import { AirportDetail, AirportIdentifier } from './dto/airport';
import { CarrierDetail } from './dto/carrier/';
import { ReservationSummary, ReservationDetail } from './dto/reservation';
import { BookingDetail, BookingIdentifier } from './dto/booking';
import { FlightIdentifier, FlightSummary } from './dto/flight';

/**
 * The contract for integration between the backend and frontend
 * @author TEAM-B-SOFT-2020
 * @copyright TEAM-B-SOFT-2020
 */
export default interface IContract {
	/**
	 * A getter for Carrier information
	 *
	 * @param iata The Carrier IATA as two capital letters i.e. "SA"
	 * @returns Carrier detail with name and IATA
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	getCarrierInformation(iata: string): Promise<CarrierDetail>;

	/**
	 * A getter for Airport information
	 * @param iata The airport IATA as three capital letters i.e. "CPH"
	 * @returns Airport detail with information about its timezone and IATA
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	getAirportInformation(iata: string): Promise<AirportDetail>;

	/**
	 * This method returns the flights available between two given airports on a given day.
	 *
	 * @param departure The Airport identifier for departure
	 * @param arrival The Airport identifier for arrival
	 * @param depart A moment-timezone object of the time of departure. Only the date matters here.
	 * @returns A list with the extended information about the flights available on the defined route on the specific date.
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	getFlightsAvailable(departure: AirportIdentifier, arrival: AirportIdentifier, depart: number): Promise<FlightSummary[]>;

	/**
	 * This method makes a flight reservation.
	 *
	 * @param id A flight identifier for the desired reservation
	 * @param amountSeats The number of seats of the desired reservation
	 * @returns An identifier for the reservation with price included
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	reserveFlight(id: FlightIdentifier, amountSeats: number): Promise<ReservationSummary>;

	/**
	 * This method books a trip of already reserved flights.
	 *
	 * @param reservationDetails A list of reservation details with reservation ids and passenger lists.
	 * Each passenger list should have the length of the perviously defined "amountSeats" of the reservation.
	 * @param creditCardNumber The credit card number of the booking.
	 * @param frequentFlyerNumber The frequent flyer number of the booker
	 * @returns A booking detail with the price and list of flights
	 * @throws [[InconsistentLengthError]] | [[NotFoundError]] | [[InvalidInputError]]
	 */
	createBooking(reservationDetails: ReservationDetail[], creditCardNumber: number, frequentFlyerNumber?: number): Promise<BookingDetail>;

	/**
	 * A getter for bookings
	 *
	 * @param id The booking identifier
	 * @returns A booking detail with the price and list of flights
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	getBooking(id: BookingIdentifier): Promise<BookingDetail>;

	/**
	 * This method cancels a booking
	 *
	 * @param id The booking identifier
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	cancelBooking(id: BookingIdentifier): Promise<void>;
}
