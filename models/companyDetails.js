const mongoose = require("mongoose")
// const Schema = mongoose.Schema()

const companySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    locations : [{
        type : String,
        required : false
    }]
})

const companyModel = mongoose.model("companyDetails", companySchema)
module.exports = companyModel
