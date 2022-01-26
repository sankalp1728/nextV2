const express = require("express")
const userRouter = require("./routes/user")
const companyRouter = require ("./routes/company")
const mrfRouter = require ("./routes/mrf")
const superAdminRouter = require("./routes/superAdmin")
const mongooseConnect = require("./db")
const app = express()

port = 3000||process.env.PORT

app.use(express.json())
mongooseConnect()


app.use(userRouter)
app.use(companyRouter)
app.use(mrfRouter)
app.use(superAdminRouter)

app.get("/",async(req,res)=>{
    console.log("application Operational")
    res.send("in root")
})

app.listen(port,()=>{
    console.log(`the server is listening to port ${port}`)
})


// TODO : To refactor middleware for multiple routes