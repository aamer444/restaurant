import express from 'express'
const restaurantRouter = express.Router()
import * as cb from '../controller/restaurantController.js'


// List of all cities

restaurantRouter.get('/locations', cb.getLocations)

//List of restaurants
restaurantRouter.get('/restaurant', cb.getRestaurantData)

//mealType
restaurantRouter.get('/meals', cb.getMealType)

//filter data by cusineId && mealId  pagination  etc
restaurantRouter.get('/filter/:mealId', cb.getFilteredData)

//
restaurantRouter.get('/details/:id', cb.getDetailsData)
// restaurantRouter.put('/getData',)



export default restaurantRouter  