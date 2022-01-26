const bcrypt = require("bcrypt")
const User = require("../models/user")

exports.checkPassword = async(userID, password)=>{
    const user = await User.findById(userID).select("password")
    isCorrect = await bcrypt.compareSync(password, user.password)
    
    if(isCorrect){
        return true
    }else{
        return false
    }
}