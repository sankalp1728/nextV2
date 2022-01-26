const mongoose = require("mongoose")
const Schema = mongoose.Schema

const usersSchema = new Schema({
    companyID : {
        type : mongoose.Schema.Types.ObjectId,      // company details table
        required : true
    },

    departmentID : {
        type : mongoose.Schema.Types.ObjectId,     // company department table
        required : false
    },

    subDepartmentID : { 
        type : mongoose.Schema.Types.ObjectId,
        required : false
    },

    designation : {
        type : String,
    },

    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    password:{
        type : String,
        required : false
    },

    location : {
        type : String
    },

    userType : {
        type : mongoose.Schema.Types.ObjectId,
        required : false         // user_type table
    },

    jobType : {
        type : String
    },

    gender : {
        type : String
    },

    diversity : {
        type : String
    },

    isActive : {
        type : Boolean
    },

    isSuperAdmin : {
        type : Boolean,
        default : false
    },

    permissions : {
        createuser : {
            type : Boolean,
            required : true
        }
        // editcompany : {
        //     type : Boolean,
        //     required : true
        // },
        // deletecompany : {
        //     type : Boolean,
        //     required : true
        // },
        // getcompany : {
        //     type : Boolean,
        //     required : true
        // },
        
    }

})

const usersModel = mongoose.model("user", usersSchema)
module.exports = usersModel



// {
//     _id : 81235 ,
//     companyID : 0123,
//     departmentID : 1004,
//     subDepartmentID : 1005
//     designation : "Business Analyst"
//     name : "Dips - Recruiter 1"
//     email : "dips@gmail.com"
//     password: "test@123"
//     location : "mumbai"
//     userType : 123
//     jobType : "full-time"
//     gender : "male"
//     diversity : "xyz"
//     isActive : true
//     isSuperAdmin : false
//     permissions : {
//         [
//          createuser : true
//         ]
// }


