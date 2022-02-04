var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')
const keys = process.env
const passwordGenerator = require("../utilities/password-generator")
const setPassword = require("../utilities/setPassword").setPassword
const checkPassword = require("../utilities/checkPassword").checkPassword
const generateToken = require("../utilities/generateToken").generateToken
const mail_util = require("../utilities/mail")
const User = require("../models/user")
const Company = require("../models/company")
const Department = require("../models/department")



exports.getUser = async(req,res) => {
    try{
        userID = req.body.userID
    }catch(err){
        
    }
}

exports.createUser = async(req,res)=> {
    try{
        req.body.isSuperAdmin = false
        password = passwordGenerator()
        
        const user = new User(req.body)
        user.save()
        .then(data=>{
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
            if(err.code == 11000){
                res.json({
                    message : "email already in use",
                    status : 404
                })
            }
            res.json({
                message : "error in creating user",
                status : 404
            })
        })


        // send mail to the user
        const success = await mail_util(
            [req.body.email],
            "The credentials to your new account are as follows",
            `The password for your new account is ${password}`
        )
        console.log(success)

        if(!success){
            await User.findByIdAndDelete(user._id)
            return res.send({
                status : 404,
                body : "email not sent"
            })
        }

        // TODO : permission logic

        // password set
        await setPassword(user._id, password)

        res.json({
            message: "user created successfully and mail sent to the User",
            password: password,
            status: 200
        })
  
    }catch(err){
        console.log(err)
        res.status(409).send("err")
    }
}

exports.login = async(req,res)=>{
    try{
        // console.log("**************In Login",req.body.password, user.password);
        var user = await User.findOne({email : req.body.email})
        if(!user){
            return res.status(401).json({
                email : "Invalid"
            })
        }
        
        if(!(await checkPassword(user._id, req.body.password))){
            console.log("error")
            return res.status(401).json({
                password : "Invalid"
            })
        }
        
        const token = await generateToken(user)
        console.log(token)
        

        res.json({
            status : 200,
            token : token
        })
  
    }catch(err){
        console.log(err);
        res.status(404).json(err);
    }  
}

