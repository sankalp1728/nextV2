const mongoose = require("mongoose")
// const Schema = mongoose.Schema()

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    locations: [{
        name: {
            type: String
        },
        id: {
            type: String
        }
    }]
})

const companyModel = mongoose.model("companyDetails", companySchema)
module.exports = companyModel


