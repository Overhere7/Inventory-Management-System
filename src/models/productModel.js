const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        default:"New Product",
    },
    price:{
        type:Number,
        required:true,
        default:0,
    },
    barcode:{
        type:String,
        required:true,
        unique:true,
    },

    
},{timeStamp:true})
module.exports=mongoose.model("Product", productSchema)