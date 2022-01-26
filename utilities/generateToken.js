const jwt = require("jsonwebtoken")

exports.generateToken = async(user)=>{
    const payload = {  
        _id : user._id,
        email : user.email,
        companyID : user.companyID
    }

    return jwt.sign(payload,"secret",{expiresIn : 3600000000})
}