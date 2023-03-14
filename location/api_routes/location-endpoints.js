// location-endpoints.js exposes endpoints to the express application

// require necessary services
const LocationService = require('../services/location-service');

module.exports = (app) => {
    const service = new LocationService();

    app.use('/about', async (req, res, next) => {
        const about = "this is the location endpoint"
        console.log("============== /location/about Received a Request")
        return res.status(200).json({"msg": "this is the /location/about endpoint"})
    });

    // GET
    app.get('/distance/:zipcode1/:zipcode2', async (req, res, next) => {
        console.log("============== /distance/:zipcode1/:zipcode2 Received a Request");
        //const zip1 = req.params.zipcode1;
        const zip_params = req.params;

        try {
            const data = await service.sumZip(zip_params)
            console.log(data)
            return res.json(data)
        } catch(error) { 
            console.log('error: ', error)
            next(error)
        }
        return res.status(200).json({"msg": "this is the /location/about endpoint"})
    });

    app.use('/', (req, res, next) => {
        return res.status(200).json({"msg": "Hello from Location Microservice"})
    });
}