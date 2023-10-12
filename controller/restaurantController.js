import mongoose, { mongo } from "mongoose";
import locationModel from "../model/locationModel.js";
import mealTypeModel from "../model/mealTypeModel.js";
import restaurantDataModel from "../model/restaurantData.js";
import { failureRes, successRes } from "../utils/responseFunctions.js";
import restaurantMenuModel from "../model/restaurantMenu.js";
import ordersModel from "../model/orders.js";



// List of all cities

export const getLocations = async (req, res) => {
    try {
        let data = await locationModel.find({})
        successRes(res, 200, data)
    } catch (error) {
        failureRes(res, 400, error.message)
    }
}

//List of restaurants

export const getRestaurantData = async (req, res) => {

    let query = {}
    let stateId = Number(req.query.stateId)
    let mealId = Number(req.query.mealId)

    try {

        if (stateId && mealId) {
            query = {
                state_id: stateId,
                "mealTypes.mealtype_id": mealId
            }
        } else if (stateId) {
            query = { state_id: stateId }
        } else if (mealId) {
            query = { "mealTypes.mealtype_id": mealId }
        } else {
            query = {}
        }

        let data = await restaurantDataModel.find(query)
        successRes(res, 200, data)
    } catch (error) {
        failureRes(res, 400, error)

    }
}

//mealType

export const getMealType = async (req, res) => {
    try {
        let data = await mealTypeModel.find({})
        successRes(res, 200, data)
    } catch (error) {
        failureRes(res, 400, error)
    }
}

// filters

export const getFilteredData = async (req, res) => {
    try {
        let query = {}
        let sort = { cost: 1 }
        let skip = 0
        let limit = 100000
        let mealId = Number(req.params.mealId)
        let cuisineId = Number(req.query.cuisineId)
        let hCost = Number(req.query.hcost)
        let lCost = Number(req.query.lcost)

        if (req.query.skip && req.query.limit) {
            skip = Number(req.query.skip)
            limit = Number(req.query.limit)
        }
        if (req.query.sort) {
            sort = { cost: Number(req.query.sort) }
        }

        if (cuisineId && hCost && lCost) {
            query = {
                'mealTypes.mealtype_id': mealId,
                $and: [{ cost: { $gt: lCost, $lt: hCost } }],
                'cuisines.cuisine_id': cuisineId
            }
        } else if (cuisineId) {
            query = {
                'mealTypes.mealtype_id': mealId,
                'cuisines.cuisine_id': cuisineId
            }
        } else if (hCost && lCost) {
            query = {
                'mealTypes.mealtype_id': mealId,
                $and: [{ cost: { $gt: lCost, $lt: hCost } }]
            }
        }
        let data = await restaurantDataModel.find(query).sort(sort).skip(skip).limit(limit)
        successRes(res, 200, data)
    } catch (error) {
        failureRes(res, 400, error)
        console.log(error.message);
    }
}

//  details
export const getDetailsData = async (req, res) => {
    try {
        let _id = req.params.id

        // console.log(_id);
        let query = { _id: _id }
        let data = await restaurantDataModel.find(query)
        console.log(data);
        successRes(res, 200, data)
    } catch (error) {
        console.log(error.message);
        failureRes(res, 400, error)
    }
}

////menu wrt to restaurants

export const getMenuWithId = async (req, res) => {
    try {
        let id = Number(req.params.id)
        let query = { restaurant_id: id }
        let data = await restaurantMenuModel.find(query)
        successRes(res, 200, data)
    } catch (error) {
        failureRes(res, 400, error)
    }
}

//placeOrder
export const placeOrder = async (req, res) => {
    try {
        let data = req.body
        console.log(data);
        let response = await ordersModel(data)
        await response.save()
        successRes(res, 201, response)
    } catch (error) {
        failureRes(res, 400, error)
    }
}

// menu details {"id":[4,3,2]}
export const getMenuDetails = async (req, res) => {
    try {
        let query = {}
        if (Array.isArray(req.body.id)) {
            query = { menu_id: { $in: req.body.id } }
            let data = await restaurantMenuModel.find(query)
            successRes(res, 200, data)
        } else {
            failureRes(res, 400, "please pass data as Array like {'id':[4,6,12]} ")
        }
    } catch (error) {
        failureRes(res, 400, error)
    }
}

//orders
export const getOrders = async (req, res) => {
    try {
        let query = {}
        if (req.query.email) {
            query = { email: req.query.email }
        }
        let data = await ordersModel.find(query)
        successRes(res, 200, data)
    } catch (error) {
        failureRes(res, 400, error)
    }
}

export const updateOrder = async (req, res) => {
    try {
        let identifier = req.params.id
        let result;
        let condition = { _id: id }
        let data = req.body
        result = await ordersModel.findByIdAndUpdate({ _id: _id }, data, { new: true });
        successRes(res, 200, result)
    } catch (error) {
        console.log(error);
        failureRes(res, 400, error)
    }
}