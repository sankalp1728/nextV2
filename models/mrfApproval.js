const mongoose = require ("mongoose")
const Schema = mongoose.Schema


const mrfApprovalSchema = new Schema({
    
    mrfRequestID : {
        type : mongoose.Schema.Types.ObjectId
    },
    
    approvals : [{
        createdDate : {
            type : Date,
            default : Date.now()
        },
        approved : {
            type : Boolean,
            default : null,
            required : false
        },
        escalated : {
            type : Boolean,
            default : null,
            required : false
        }
    }]
})