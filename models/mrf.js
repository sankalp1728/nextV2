const mongoose = require ("mongoose")
const Schema = mongoose.Schema


const mrfSchema = new Schema({

    positonID : {
        type : Number,
        required : true
    },

    noOfReq:{
        type:Number,
        required:true
    },

    designation : {
        type : String, 
    },

    rmName:{
        type : String
    },
    rmDesignation : {
        type : String
    },

    departmentName:{
        type : String
    },

    depHeadName:{
        type : String
    },

    subDepHeadName:{
        type :String
    },

    subDepartmentName : {
        type : String
    },

    location:{
        type: String

        // work from home
    },

    budget : {
        type : String
    },

    positonType : {
        type : String
    },

    specification : {
        age : {
            type : Number,
            required : true
        },
        relExp : {
            type : Number,
            required : true
        },
        totalExp : {
            type : Number,
            required : true
        },
        education : {
            type : String,
            required : true
        }
    },

    mrfStatus:{    //  IF POSITION STATUS IS CLOSED, THEN, NAME OF THE CANDIDATE, SOURCE TYPE, SOURCE NAME, DOJ, HIRING COST &REMARKS FOR RECRUITER NOTES
        type:String,
        enum : ["UNAPPROVED","OPEN","CLOSED","CANCELLED"]
    },  // to make seprate collection to update the table (require the cost of updating the mrf)

    diversity : {
        type : String,
      //  required : true,
      //  enum : ['Physically Challenged', 'Visually Challenged','Women','General']
    },

     //females, physically/visuall handicaped

     startDate : {
        type : Date,
        required : true
    }, // approval date

    //company will define TAT(unique for each mrf)
    //company will decide  TAT or end date
    endDate : {
        type : Date,
        required : true
    }, // end date bulk mrf changes, and TAT separate

    // Based on the candidate progress example screened , lined up ,  ongoing 
    // mrfStatus : {
    //     type: String
    // }

})

const mrfModel =  new mongoose.model("mrfModel",mrfSchema)
module.exports = mrfModel