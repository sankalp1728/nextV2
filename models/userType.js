const mongoose = require("mongoose")
const Scehma = mongoose.Schema

const userTypeSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    permissions: {
        createcompany : {
            type : Boolean,
            required : true
        },
        editcompany : {
            type : Boolean,
            required : true
        },
        deletecompany : {
            type : Boolean,
            required : true
        },
        getcompany : {
            type : Boolean,
            required : true
        },
        createuser : {
            type : Boolean,
            required : true
        },
        getuser : {
            type : Boolean,
            required : true
        },
        createdepartment : {
            type : Boolean,
            required : true
        },
        createusertype : {
            type : Boolean,
            required : true
        }
    }
})

const userTypeModels = mongoose.model("userType", userTypeSchema)
module.exports = userTypeModels