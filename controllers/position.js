const Position = require("../models/position")
const dummyData = require("../responses")
const getPosition = require("../utilities/dbQuery").getPosition

exports.createPostionMatrix =  (req,res)=>{

    console.log("In create position",req.body);
    const position = new Position(req.body)
    
    position.save().then(response =>{
        res.json({
            message : "New position saved",
            status : 200
        })
    }).catch (err =>{
        console.log(err);
        res.json({
            message : "Error in creating postion",
            status : 501
        })
    })
}

exports.updatePositionMatrix =  (req,res)=>{

    const positonId = req.body.id    
    Position.findByIdAndUpdate(positonId , req.body ).then(response=>{
        console.log(response);
        res.json({
            message : "Position is updated",
            status : 200,
        })
    }).catch(err =>{
        res.json({
            message : "Updation failed",
            status : 501
        })
    })
}

exports.getPositionMatrix = async(req,res)=>{
    if(req.query.dummy=="true"){
        console.log("In get position matrix", dummyData.position);
        res.json({
            status:200,
            message : "All approval matrix",
            body : dummyData.position
        })
    }
    else{

        try{
        var position = await getPosition(req.query.positionID)
        if (position) {
          res.json({
              status:200,
              body : position
          })  
        }
    }
    catch(err){
            console.log(err);
            res.json({
                status: 500,
                message:"Error in getting approval matrix"
            })
        }
    }
}

exports.getSinglePosition = async(req,res)=>{
    var id = req.params.id
}

// mrfid, (approver 1 approved) , positionid => user 1, -> 2 


