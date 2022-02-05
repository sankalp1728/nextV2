const mongoose = require ("mongoose")
const Schema = mongoose.Schema


const mrfRequestSchema = new Schema({

    positionID : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },

    noOfReq:{
        type:Number,
     //   required:true
    },

    designation : {
        type : String, 
    },

    reportingManagerID : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },

    turnAroundTime : {
        type : Date,
        required : true
    },

    departmentID : {
        type : mongoose.Schema.Types.ObjectId,
      //  required: true
    },
    // if front-end needs head name, put it in get route

    subDepartmentID : {
        type : mongoose.Schema.Types.ObjectId,
      //  required : false
    },
    // if front-end needs head name, put it in get route

    location:{
        type: String,
        required : false
        // work from home
    },

    budget : {
        type : Number,
     //   required : true
    },

    positonType : {
        type : String,
     //   required : false
    },

    specification : {
        age : {
            type : Number,
         //   required : true
        },
        relExp : {
            type : Number,
          //  required : true
        },
        totalExp : {
            type : Number,
        //    required : true
        },
        education : {
            type : String,
         //   required : true
        }
    },

    mrfStatus:{    //  IF POSITION STATUS IS CLOSED, THEN, NAME OF THE CANDIDATE, SOURCE TYPE, SOURCE NAME, DOJ, HIRING COST &REMARKS FOR RECRUITER NOTES
        type:String,
        enum : ["unapproved","open","closed","cancelled","approved","na","rejected"]
    },  // to make seprate collection to update the table (require the cost of updating the mrf)

    diversity : {
        type : String,
      //  required : true,
      //  enum : ['Physically Challenged', 'Visually Challenged','Women','General']
    },

     //females, physically/visuall handicaped

    startDate : {
        type : Date,
    //    required : true
    }, // approval date

    //company will define TAT(unique for each mrf)
    //company will decide  TAT or end date
    endDate : {
        type : Date,
      //  required : true
    }, // end date bulk mrf changes, and TAT separate

    // Based on the candidate progress example screened , lined up ,  ongoing 
    // mrfStatus : {
    //     type: String
    // }
    remarks : [{
        createdAt : {
            type : Date,
            default : Date.now()
        },
        body : {
            type : String,
          //  required : true
        },
        userID : {
            type : mongoose.Schema.Types.ObjectId,
         //   required : true
        }
    }],

    approvals : [{
        createdAt : {
            type : Date,
            default : Date.now()
        },
        approverID : {
            type : mongoose.Schema.Types.ObjectId,
          //  required : true
        },
        isAction : {
            type : Boolean,
            required : false
        },
        status : {
            type:String,
       //     enum:["accepted","rejected"]          
            
            // accepted , rejected
        },
        escalated : {
            type : Boolean,
            default : false,
            required : false
        }
    }],

    currentApprover : {
        createdAt : {
            type : Date,
            default : Date.now()
        },
        approverID : {
            type : mongoose.Schema.Types.ObjectId,
        //    required : true
        },
        isApproved : {
            type : Boolean,
            required : false
        }
    }
},

{
    timestamps: true
})

const mrfModel =  new mongoose.model("mrfRequest",mrfRequestSchema)
module.exports = mrfModel


