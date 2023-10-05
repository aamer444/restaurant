import locationModel from "../model/locationModel.js";
import restaurantDataModel from "../model/restaurantData.js";
import { failureRes, successRes } from "../utils/responseFunctions.js";



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

        if(stateId && mealId){
            query={
                state_id:stateId,
                "mealTypes.mealtype_id":""
            }
        }




        let data = await restaurantDataModel.find({})
        successRes(res, 200, data)
    } catch (error) {
        failureRes(res, 400, error)

    }
}

