const mongoose =  require('mongoose')
const Schema = mongoose.Schema


const departmentSchema = new Schema ({

    companyID : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    
    name : {
        type : String,
        required : true
    },

    headID : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },

    parentID : {
        type : mongoose.Schema.Types.ObjectId,
        required : false,
        default : null
    }
    // if front-end sends parentID then Sub-dep, if not Dep

}) 

const departmentDetails = mongoose.model("departmentDetails",departmentSchema)

module.exports = departmentDetails