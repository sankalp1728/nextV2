const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vendorSchema = new Schema({
    name : {
        type : String,
        required : true,
        // unique : true
    },
    company : {
        type: String,
        required:true,
    },
    vendorType: {
        type:String,
        enum : ["agency","bgv"]
    },
    password:{
        type: String,
        required : true
    },
    email:{
        type : String,
        required : true
    }
})

const vendorModel = mongoose.model("vendor", vendorSchema)
module.exports = vendorModel