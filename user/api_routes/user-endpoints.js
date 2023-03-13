// user-endpoints.js exposes endpoints to the express application

// require necessary services
const UserService = require('../services/user-service');

module.exports = (app) => {
    // const service = new UserService();

    app.use('/about', async (req, res, next) => {
        const about = "this is the user endpoint"
        console.log("============== User Endpoint Received a Request")
        return res.status(200)
    })
}