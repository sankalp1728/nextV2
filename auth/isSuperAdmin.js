const express = require("express")
const User = require("../models/users")

const accessCheck = async(req,res,next) =>{
    try{
        const user = await User.findById(req.user._id)
        console.log("***************************")
        if(user.isSuperAdmin){
            console.log("access-granted")
            next()
        }
        else{
            throw new Error("not permitted")
        }
    }catch(err){
        console.log("************", err)
        res.status(403).json({
            details : "someerror"
        })
    }
}

module.exports = accessCheck