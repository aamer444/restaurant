import express from 'express'
const restaurantRouter = express.Router()
import * as cb from '../controller/restaurantController.js'


// List of all cities

restaurantRouter.get('/locations', cb.getLocations)

//List of restaurants
restaurantRouter.get('/restaurant', cb.getRestaurantData)

//mealType
restaurantRouter.get('/meals', cb.getMealType)

//
 restaurantRouter.get('/filter/:mealId',cb.getFilteredData)
// restaurantRouter.put('/getData',)



export default restaurantRouter  