// location-endpoints.js exposes endpoints to the express application

// require necessary services
// const UserService = require('../services/location-service');

module.exports = (app) => {
    // const service = new UserService();

    app.use('/about', async (req, res, next) => {
        const about = "this is the location endpoint"
        console.log("============== /location/about Received a Request")
        return res.status(200).json({"msg": "this is the /location/about endpoint"})
    });

    app.use('/', (req, res, next) => {
        return res.status(200).json({"msg": "Hello from Location Microservice"})
    });
}