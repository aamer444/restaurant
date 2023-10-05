import mongoose from "mongoose";

let schema = mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phone: Number,
    cost: Number,
    menuItem: Array,
    status: String
})

let ordersModel = mongoose.model("orders", schema, 'orders')

export default ordersModel