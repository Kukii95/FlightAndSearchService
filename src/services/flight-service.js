const {FlightRepository,AirplaneRepository, AirplaneRepository}=require('../repository/index');

const {compareTime}=require('../utilis/helper');

class FlightService{

    constructor(){
        this.airplaneRepository=new AirplaneRepository();
        this.flightRepository=new FlightRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight=await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            throw(error);
        }
    }

    async get()[

    ]

    async getAllFlightData(data){
         try {
            const flights=await this.flightRepository.getAllFlight(data);
            return flights;
         } catch (error) {
            throw(error);
         }
    }
}

module.exports=FlightService;
/**
 * {
 *   flightNumber,
 *   airplaneId,
 *   arrivalAirportId,
 *   departureAirportId,
 *   arrivalTime,
 *   departureTime,
 *   cost,
 *   totalSeats->airplane
 * }
 */