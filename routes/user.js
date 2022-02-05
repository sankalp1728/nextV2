const express = require("express")
const userController = require("../controllers/user")
userRouter = express.Router()

// userRouter.get("/getusers",userController.getUser)
// userRouter.get("/getuser/:id",userController.getSingleUser)
userRouter.post("/createuser", userController.createUser)
userRouter.post("/login",userController.login)
userRouter.get("/user",userController.getUser)
// userRouter.patch("/edituser", userController.createUser)

module.exports = userRouter