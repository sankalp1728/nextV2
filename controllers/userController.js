const express = require("express")
const User = require("../models/users")
const Company = require("../models/company")
const Department = require("../models/departmentDetails")


exports.getUser = async(req,res) => {
    res.send("hello")
}

exports.createUser = async(req,res)=> {
    try{
        req.body.password = "abcd"
        const user = new User(req.body)



    }catch(e){

    }
}