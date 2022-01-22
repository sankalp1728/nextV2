var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')
const keys = process.env
const User = require("../models/user")
const Company = require("../models/company")
const Department = require("../models/department")



exports.getUser = async(req,res) => {
    res.send("hello")
}

exports.createUser = async(req,res)=> {
    try{
        req.body.password = "abcd"
        const user = new User(req.body)
            user.save().then(response=>{
                console.log("user ", response);
                res.json({
                    message:"User created successfully",
                    status:200
                })
            }).catch(err=>{
                res.json({
                    message:"Error in creating user failed",
                    status: 501
                })
            })
        
    }catch(e){
        res.json({
            message:"Error in creating user ",
            status:401
        })
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
        console.log("**************In Login",bcrypt.compareSync(req.body.password, user.password));

        if(!bcrypt.compareSync(req.body.password, user.password)){
            console.log("error")
            return res.status(401).json({
                password : "Invalid"
            })
        }

        const payload = {  
            _id : user._id,
            email : user.email,
            companyID : user.companyID
        }
    //    console.log(user._id, user._id instanceof mongoose.Types.ObjectId)
        
        jwt.sign(payload,"secret",{expiresIn : 36000},(err,token)=>{
            console.log({ token : token })
            res.json({
                token : 'Bearer ' + token,
            })
        })   
    }catch(err){
        console.log(err);
        res.status(404).json(err);
    }
    
}

