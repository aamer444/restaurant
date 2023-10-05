import mongoose from "mongoose";

let schema=new mongoose.Schema({
    menu_id:Number,
    menu_name:String ,
    description:String ,
    restaurant_id:Number ,
    menu_image: String,
    menu_type: String,
    menu_price: Number
})


let restaurantMenuModel=mongoose.model("restaurantMenu",schema)

export default restaurantMenuModel