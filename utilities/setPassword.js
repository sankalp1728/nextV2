const bcrypt = require("bcrypt")
const User = require("../models/user")

exports.setPassword = async(userID, password)=>{
    try{
        const salt = await bcrypt.genSaltSync(10)
        const hash = await bcrypt.hashSync(password,salt)
        const user = await User.findByIdAndUpdate(userID, {password : hash}).lean()
        return user
    }catch(err){
        return err
    }
}