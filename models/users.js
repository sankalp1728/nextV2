const mongoose = require("mongoose")
const Schema = mongoose.Schema()

const usersSchema = new Schema({
    companyID : {
        type : mongoose.Schema.Types.ObjectId,      // company details table
        required : true
    },

    departmentID : {
        type : Number,     // company department table
        required : true
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
        required : true
    },

    location : {
        type : String
    },

    userType : {
        type : Number         // user_type table
    },

    jobType : [{
        type : string
    }],

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
        addUser : {
            type : Boolean,
            required : true
        },
        searchUser : {
            type : Boolean,
            required : true
        },
        deleteUser : {
            type : Boolean,
            required : true
        },
        editUser : {
            type : Boolean,
            required : true
        },
        changePassword : {
            type : Boolean,
            requried : true
        },
        addBranch : {
            type : Boolean,
            required : true
        },
        showBranch : {
            type : Boolean,
            required : true
        },
        
        addUserProfile : {
            type : Boolean,
            requried : true
        },
        updateUserProfile : {
            type : Boolean,
            required : true
        },
        deleteUserProfile : {
            type : Boolean,
            required : true
        },
        addHeirarchy :  {
            type : Boolean,
            required : true
        },
        removeHeirarchy : {
            type : Boolean,
            required : true
        },
        searchHeirarchy : {
            type : Boolean,
            required : true
        },
        searchUserProfile : {
            type : Boolean,
            required : true
        },
        addUserProfile : {
            type : Boolean,
            required : true
        },
        
        addApprovalMatrix : {
            type : Boolean,
            required : true
        },
        deleteApprovalMatrix : {
            type : Boolean,
            required : true
        },
        updateApprovalMatrix : {
            type : Boolean,
            required : true
        },
        requestApprovalMatrix : {
            type : Boolean,
            required : true
        },
        addMrfRequest : {
            type : Boolean,
            required : true
        },
        deleteMrfRequest : {
            type : Boolean,
            required : true
        },
        editMrfRequest : {
            type : Boolean,
            required : true
        },
        showMrfRequest : {
            type : Boolean,
            required : true
        },
        showApproval : {
            type : Boolean,
            required : true
        },
        giveApproval : {
            type : Boolean,
            requried : true
        }
    }

})

const usersModel = mongoose.model("user", usersSchema)
module.exports = usersModel