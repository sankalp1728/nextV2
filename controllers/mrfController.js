const PostionMatrix = require("../models/mrfApprovalMatrix")

exports.createPostionMatrix =  (req,res)=>{

    console.log("In create position",req.body);
    const postionMatrix = new PostionMatrix(req.body)

    postionMatrix.save().then(response =>{
        res.json({
            message : "New positon saved",
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
    PostionMatrix.findByIdAndUpdate(positonId , req.body ).then(response=>{
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