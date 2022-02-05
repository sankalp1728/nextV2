const express = require("express")
const userTypeRouter = express.Router()
const userTypeConroller = require("../controllers/userType")

userTypeRouter.post("/usertype", userTypeConroller.addUserType)

module.exports = userTypeRouter