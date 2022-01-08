const mongoose =  require('mongoose')
const Schema = mongoose.Schema
const departmentSchema = new Schema ({

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