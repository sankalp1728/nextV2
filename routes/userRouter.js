const express = require("express")
const userController = require("../controllers/userController")
userRouter = express.Router()

userRouter.get("/user/list",userController.getUser)

module.exports = userRouter