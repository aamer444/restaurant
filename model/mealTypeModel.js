import mongoose from "mongoose";

let schema = mongoose.Schema({
    mealType_id: Number,
    mealType: String,
    content: String,
    meal_image: String
})

let mealTypeModel = mongoose.model('mealType', schema)

export default mealTypeModel