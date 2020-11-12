import { Moment } from 'moment-timezone';

import IAirportDetail from './dto/airport/IAirportDetail';
import IAirportIdentifier from './dto/airport/IAirportIdentifier';

import ICarrierDetail from './dto/carrier/ICarrierDetail';

import IReservationIdentifier from './dto/reservation/IReservationIdentifier';
import IReservationSummary from './dto/reservation/IReservationSummary';
import IReservationDetail from './dto/reservation/IReservationDetail';

import IPassenger from './dto/passenger/IPassenger';

import IBookingDetail from './dto/booking/IBookingDetail';
import IBookingIdentifier from './dto/booking/IBookingIdentifier';

import IFlightIdentifier from './dto/flight/IFlightIdentifier';
import IFlightSummary from './dto/flight/IFlightSummary';

import NotFoundError from './eto/NotFoundError';
import InvalidInputError from './eto/InvalidInputError';
import InconsistentLengthError from './eto/InconsistentLengthError';

/**
 * The contract for integration between the backend and frontent
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
	getCarrierInformation(iata: string): ICarrierDetail | NotFoundError | InvalidInputError;

	/**
	 * A getter for Airport information
	 * @param iata The airport IATA as three capital letters i.e. "CPH"
	 * @returns Airport detail with information about its timezone and IATA
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	getAirportInformation(iata: string): IAirportDetail | NotFoundError | InvalidInputError;

	/**
	 * This method returns the flights available between two given airports on a given day.
	 *
	 * @param departure The Airport identifier for departure
	 * @param arrival The Airport identifier for arrival
	 * @param depart A moment-timezone object of the time of departure. Only the date matters here.
	 * @returns A list with the extended information about the flights available on the defined route on the specific date.
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	getFlightsAvailable(departure: IAirportIdentifier, arrival: IAirportIdentifier, depart: Moment): IFlightSummary[] | NotFoundError | InvalidInputError;

	/**
	 * This method makes a flight reservation.
	 *
	 * @param id A flight identifier for the desired reservation
	 * @param amountSeats The number of seats of the desired reservation
	 * @returns An identifier for the reservation with price included
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	reserveFlight(id: IFlightIdentifier, amountSeats: number): IReservationSummary | NotFoundError | InvalidInputError;

	/**
	 * This method books a trip of already reserved flights.
	 *
	 * @param reservationDetails A list of reservation details with reservation ids and passenger lists.
	 * Each passenger list should have the length of the perviously defined "amountSeats" of the reservation.
	 * @param creditCardNumber The creditcard number of the booking.
	 * @param frequentFlyerNumber The frequent flyer number of the booker
	 * @returns A booking detail with the price and list of flights
	 * @throws [[InconsistentLengthError]] | [[NotFoundError]] | [[InvalidInputError]]
	 */
	createBooking(
		reservationDetails: IReservationDetail[],
		creditCardNumber: number,
		frequentFlyerNumber?: number
	): IBookingDetail | InconsistentLengthError | NotFoundError | InvalidInputError;

	/**
	 * A getter for bookings
	 *
	 * @param id The booking identifier
	 * @returns A booking detail with the price and list of flights
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	getBooking(id: IBookingIdentifier): IBookingDetail | NotFoundError | InvalidInputError;

	/**
	 * This method cancels a booking
	 *
	 * @param id The booking identifier
	 * @throws [[NotFoundError]] | [[InvalidInputError]]
	 */
	cancelBooking(id: IBookingIdentifier): void | NotFoundError | InvalidInputError;
}
