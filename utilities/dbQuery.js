const express = require("express")
const async = require("async")
const User = require("../models/user")
const Department = require("../models/department")
const Company = require("../models/company")
const Position = require("../models/position")


// TODO asyncFunctions:-better name

exports.getUser = async(userID) => {
    const user = await User.findById(userID).lean()
    asyncFunctions = []
    asyncFunctions.push(Company.findById(user.companyID).lean())
    asyncFunctions.push(Department.findById(user.departmentID).lean())
    if(user.subDepartmentID){
        asyncFunctions.push(Department.findById(user.subDepartmentID).lean())
    }
    const results = await Promise.all(asyncFunctions)
    
    user.company = results[0]
    user.department = results[1]
    
    if(user.subDepartmentID){
        user.subDepartment = results[2]
    }
    return user
}

exports.getMrfRequest = async(MrfRequestID) => {
    const mrfRequest = await MrfRequest.findById(mrfRequestID)
    asyncFunctions = []
    remarkQueue = []
    
    asyncFunctions.push(this.getPosition(mrfRequest.positionID))
    asyncFunction.push(this.getUser(mrfRequest.positionRequesterID))
    asyncFunction.push(Department.findById(mrfRequest.departmentID).lean())
    if(mrfRequest.subDepartmentID){
        asyncFunction.push(Department.findById(mrfRequest.subDepartmentID).lean())
    }
    for(remark in remarks){
        remarkQueue.push(this.getUser(remarks[remark].userID))
    }

    const results = await Promise.all(asyncFunctions)

    MrfRequest.position = results[0] 
    MrfRequest.department = results[1]



}

exports.getPosition = async(positionID) => { 
    const position = await Position.findById(positionID).lean()
    
    asyncFunctions = []
    approverQueue = []
    asyncFunctions.push(this.getUser(position.positionRequesterID))
    asyncFunctions.push(Company.findById(position.companyID).lean())
    asyncFunctions.push(Department.findById(position.departmentID).lean())
    if(position.subDepartmentID){
        asyncFunctions.push(Department.findById(position.subDepartmentID).lean())
    }
    for(user in position.approverList){
        approverQueue.push(this.getUser(position.approverList[user]))
    }


    const results = await Promise.all(asyncFunctions)
    const approvers = await Promise.all(approverQueue)

    position.requester = results.shift()
    position.company = results.shift()
    position.department = results.shift()
    if(position.subDepartmentID){
        position.subDepartment = results.shift()
    }
    for(user in position.approverList){
        position.approverList[user] = approvers.shift()
    }
    console.log()
    return position
}
