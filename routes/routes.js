const DriversControllers = require('../controllers/drivers_controller')

module.exports = (app) => {
  // Watch fro incoming requests of method GET
  // to the route http://localhost:3050/api
  app.get('/api', DriversControllers.greeting)
}
