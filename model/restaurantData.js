import mongoose from "mongoose";

let mealTypesSchema = new mongoose.Schema({
    mealtype_id: Number,
    mealtype_name: String
})

let cuisinesSchema = mongoose.Schema({
    cuisine_id: Number,
    cuisine_name: String
})

let schema = mongoose.Schema({
    restaurant_id: Number,
    restaurant_name: String,
    location_id: Number,
    state_id: Number,
    address: String,
    restaurant_thumb: String,
    average_rating: Number,
    rating_text: String,
    cost: Number,
    address: String,
    contact_number: Number,
    mealTypes: [mealTypesSchema],
     cuisines: [cuisinesSchema],
    image_gallery: Array
})

let restaurantDataModel = mongoose.model('restaurantData', schema, 'restaurantData')

export default restaurantDataModel