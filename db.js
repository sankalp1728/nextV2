const mongoose = require("mongoose")

const dbConnection = ()=>{mongoose.connect("mongodb+srv://sankalp1728:sankalp1728@cluster0.uqisn.mongodb.net/nextv2?retryWrites=true&w=majority").then(()=>{
    console.log("connection has been established with the database")
})}

module.exports = dbConnection
