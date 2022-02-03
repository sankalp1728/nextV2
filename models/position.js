const mongoose = require("mongoose")
const Schema = mongoose.Schema
const mrfApprovalMatrixSchema = new Schema({

    positionName : {
        type : String,
        required : true
    },
    positionRequesterID : {
        type : mongoose.Schema.Types.ObjectId,
        required : false
    },
    companyID : {
        type: mongoose.Schema.Types.ObjectId,
     //   required : true
    },
    departmentID : {
        type: mongoose.Schema.Types.ObjectId,
     //   required : true
    },
    subDepartmentID : {
        type : mongoose.Schema.Types.ObjectId,
     //   required: false
    },
    approverList : [{
        type: mongoose.Schema.Types.ObjectId,
      //  required: true
    }],
    turnAroundTime : {
        type : Number,
      //  required : true
    },
    isApproved : {
        type : Boolean,
        required : true,
        default : false
    }
})

const mrfApproval = mongoose.model("mrfApprovalMatrix",mrfApprovalMatrixSchema)
module.exports=mrfApproval







