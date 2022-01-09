const mongoose =  require('mongoose')
const Schema = mongoose.Schema
const departmentSchema = new Schema ({

    companyId : {
        type : Number,
        required : true
    },
    
    departmentName : {
        type : String,
        required : true
    },

    departmentHead : {
        type : String,
    },

    subDepartment : [{
        type: String,
        subDepartmentHead: String
    }]
}) 

const departmentDetails = mongoose.model("departmentDetails",departmentSchema)

module.exports = departmentDetails