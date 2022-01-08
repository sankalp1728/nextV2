const mongoose = require("mongoose")
const Schema = mongoose.Schema()

const mrfApprovalMatrixSchema = new Schema({

    postionName : {
        type : String,
        required : true
    },

    approverList :[{
        type: Number,
        required: true
    }]
})

const mrfApproval = mongoose.model("mrfApprovalMatrix",mrfApprovalMatrixSchema)
module.exports=mrfApproval