const mongoose = require("mongoose")
const Schema = mongoose.Schema
const mrfSources = require("../constants").mrfSources

const mrfApprovalSchema = new Schema({

    mrfRequestID : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },

    recruiterID : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },

    status : {
        type : String,
        required : true
    }
})