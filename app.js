const express = require("express")
const userRouter = require("./routes/user")
const companyRouter = require ("./routes/company")
const positionRouter = require ("./routes/position")
const mrfRouter = require("./routes/mrf")
const superAdminRouter = require("./routes/superAdmin")
const vendorRouter = require("./routes/vendor")
const userTypeRouter = require("./routes/userType")
const mongooseConnect = require("./db")
const morgan = require("morgan")
const app = express()

port = 3001 || process.env.PORT

app.use(express.json())
mongooseConnect()

app.use(morgan("tiny"))
app.use(userRouter)
app.use(companyRouter)
app.use(positionRouter)
app.use(mrfRouter)
app.use(userTypeRouter)
app.use(superAdminRouter)
app.use(vendorRouter)

app.get("/",async(req,res)=>{
    console.log("application Operational")
    res.send("in root")
})

app.listen(port,()=>{
    console.log(`the server is listening to port ${port}`)
})


// TODO : To refactor middleware for multiple routes