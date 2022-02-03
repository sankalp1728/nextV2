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

    // field will be filled in case the user has come from a referal
    refferedByID : {
        type : mongoose.Schema.Types.ObjectId,
        default : null,
        required : false
    },

    SourceType : {
        type : Number,
        default : mrfSources.self,
        required : false
    },
})