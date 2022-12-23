const CrudService=require('./crud-service');
const {AirportRepository}=require('../repository/crud-repository');

class AirportService extends CrudService{
    constructor(){
        const airportRepository=new AirportRepository();
        super(airportRepository);
    }
}

module.exports=AirportService;