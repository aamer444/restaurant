import mongoose from "mongoose";

let schema = new mongoose.Schema({
    location_id: Number,
    location_name: String,
    state_id: Number,
    state: String,
    country_name: String
})

let locationModel = mongoose.model('location', schema)


export default locationModel