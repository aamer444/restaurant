import express from 'express'
const restaurantRouter = express.Router()
import * as cb from '../controller/restaurantController.js'


// List of all cities

restaurantRouter.get('/locations', cb.getLocations)

//List of restaurants
restaurantRouter.get('/restaurant', cb.getRestaurantData)

//
// restaurantRouter.put('/getData',)
// restaurantRouter.get('/getData',)



export default restaurantRouter  