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

// details  
restaurantRouter.get('/details/:id', cb.getDetailsData)

//menu wrt to restaurants
restaurantRouter.get('/menu/:id', cb.getMenuWithId)

// orders
restaurantRouter.get("/orders", cb.getOrders)

//placeOrder
restaurantRouter.post('/placeOrder', cb.placeOrder)

//Menu Details
restaurantRouter.get('/menuDetails', cb.getMenuDetails)

//update order
restaurantRouter.put("/updateOrder/:id",cb.updateOrder)



export default restaurantRouter  