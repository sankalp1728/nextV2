const express = require("express")
const userController = require("../controllers/userController")
userRouter = express.Router()

// userRouter.get("/getusers",userController.getUser)
// userRouter.get("/getuser/:id",userController.getSingleUser)
userRouter.post("/createuser", userController.createUser)
userRouter.post("/login",userController.login)
// userRouter.patch("/edituser", userController.createUser)

module.exports = userRouter