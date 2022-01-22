const User = require("../models/user")
var bcrypt = require('bcryptjs');

exports.createSuperAdmin = async(req,res)=>{
    try{
        const salt = await bcrypt.genSaltSync(10)
        const hash = await bcrypt.hashSync(req.body.password,salt)
        req.body.password = hash;
        req.body.isSuperAdmin = true   //  
        const user = new User(req.body)

        // const department =  Department.findById(req.body.departmentID)
       // check company id of user with the department id
        // if (department.companyId != req.body.companyId){
        //     throw new Error();
        // }
            user.save().then(response=>{
                console.log("user admin ", response);
                res.json({
                    message:"Super admin created successfully",
                    status:200
                })
            }).catch(err=>{
                res.json({
                    message:"Error in creating super admin failed",
                    status: 501
                })
            })
        
    }catch(e){
        console.log(e);
        res.json({
            message:"Error in creating super admin",
            status:401
        })
    }
}

// exports.updateSuperAdmin