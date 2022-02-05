const UserType = require("../models/userType")

exports.addUserType = async(req,res) => {
    try{
        const userType = new UserType(req.body)
        await userType.save()
        res.json({
            status : 201,
            body : userType
        })
    }catch(err){
        console.log(err)
        res.send(err)
    }
}