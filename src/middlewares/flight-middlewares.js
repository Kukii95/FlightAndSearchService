const validateCreateFlight=(req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.arrivalTime||
        !req.body.departureTime ||
        !req.body.arrivalAirportId ||
        !req.body.departureAirportId ||
        !req.body.cost
    ){
        return res.status(400).json({
            data:{},
            success:false,
            message: 'Invalid request body for create flight',
            err: 'Missing mandatory properties to create a flight'
        });
    }
    next();
}
module.exports={
    validateCreateFlight
}