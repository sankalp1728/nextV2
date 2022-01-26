const express = require("express")
const User = require("../../models/user")

const accessCheck = async(req,res,next) =>{
    try{
        console.log("***************************")
        permissionParam = req.url
        permissionParam = permissionParam.replace(/[^a-zA-Z ]/g, "")

        const user = await User.findById(req.user.id)
        if(user.permissions[permissionParam]){
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