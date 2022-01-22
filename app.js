const express = require("express")
const userRouter = require("./routes/userRouter")
const companyRouter = require ("./routes/companyRouter")
const mrfRouter = require ("./routes/mrfRouter")
const superAdminRouter = require("./routes/superAdminRouter")
const mongooseConnect = require("./db")
const app = express()

port = 2233||process.env.PORT

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