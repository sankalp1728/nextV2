const express = require("express")
const async = require("async")
const User = require("../models/user")
const Department = require("../models/department")
const Company = require("../models/company")
const Position = require("../models/position")


exports.getUser = async(userID) => {
    const user = await User.findById(userID).lean()
    asyncFunctions = []
    asyncFunctions.append(user.company = await Company.findById(user.companyID).lean())
    asyncFunctions.append(user.department = await Department.findById(user.departmentID).lean())
    async.parallel(asyncFunctions, (err,result)=> {
        console.log(result)
    })
    return user
}

exports.getMrfRequest = async(MrfRequestID) => {
    const MrfRequest = await MrfRequest.findById(mrfRequestID)
    asyncFunctions = []
    asyncFunctions.append(MrfRequest.position = await Position.findById(MrfRequest.positionID))
    asyncFunctions.append(MrfRequest.department = await Department.findById(MrfRequest.department))

}

exports.getPosition = async(positionID) => { 
    const position = await Position.findById(positionID)
    position.requester = await this.getUser(position.postionRequesterID)
    position.company = await Company.findById(user.companyID).lean()
    position.department = await department.findById(position.departmentID)

    if(position.subDepartmentID){
        position.subDepartment = await department.findById(position.subDepartmentID)
    }

    for(user in position.approverList){
        position.approverList[user] = await this.getUser(position.approverList[user])
    }

    return user
}
