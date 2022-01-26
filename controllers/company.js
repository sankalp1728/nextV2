const { response } = require("express");
const { set } = require("mongoose");
const CompanyDetails = require("../models/company");
const DepartmentDetails = require("../models/department");
const dummyData = require("../responses");

exports.createCompany = async (req, res) => {
  const companyDetails = new CompanyDetails(req.body);

  companyDetails
    .save()
    .then((response) => {
      debugger;
      res.json({
        message: "Company Record Added",
        status: 200,
      });
    })
    .catch((err) => {
      res.json({
        message: "Error occured in adding company record",
        status: 409,
      });
    });
};

exports.getCompanyDetails = async (req, res) => {
  console.log("Hello");

  if (req.query.dummy == "true") {
    console.log("in dummy", dummyData.companyDetails);
    res.json({
      message: "Get Company Data ",
      status: 200,
      body: dummyData.companyDetails,
    });
  } else {
    try {
      const companyDetails = await CompanyDetails.find().lean();
      res.json({
        message: "Get Company Data Success",
        status: 200,
        body: companyDetails,
      });
    } catch (err) {
      console.log("Error In Get Company Records", err);
      res.json({
        message: "Error In Get Company Data Success",
        status: 501,
      });
    }
  }
};

exports.editCompany = async (req, res) => {
  const company = CompanyDetails.findById(req.body._id).update(
    {
      name: req.body.name,
      locations: req.body.locations,
    },
    { $set: set }
  );
};
exports.createDepartment = async (req, res) => {
  const detpartmentDetails = new DepartmentDetails(req.body);
  detpartmentDetails
    .save()
    .then((response) => {
      res.json({
        message: "Department Added Successfully",
        status: 200,
      });
    })
    .catch((err) => {
      res.json({
        message: "Error occured in adding department",
        status: 404,
      });
    });
};
exports.getDepartments = async (req, res) => {
  var departments = [];
  if (req.query.dummy == "true") {
    console.log("In Get Department", dummyData.departmentDetails);

    for (var i = 0; i < dummyData.departmentDetails.length; i++) {
      if (dummyData.departmentDetails[i].parentID == null) {
        departments.push(dummyData.departmentDetails[i]);
        res.json({
          message: "Get Department Data Success",
          status: 200,
          body: departments,
        });
      }
    }
  } else {
    try {
      const departmentDetails = await DepartmentDetails.find().lean();
      for (var i = 0; i < departmentDetails.length; i++) {
        if (departmentDetails[i].parentID == null) {
          departments.push(departmentDetails[i]);
        }
      }
      res.json({
        message: "Get Company Data Success",
        status: 200,
        body: departments,
      });
    } catch (err) {
      console.log("In error Department");
      res.json({
        message: "Error in getting departments",
        status: 404,
      });
    }
  }
};
exports.getSingleDepartment = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  var subDepartment = "";
  var response = {};
  if (req.query.dummy == "true") {
    console.log("In Single Department Id");
    var department = dummyData.departmentDetails.filter((data) => {
      return data._id == id;
    });
    console.log(department);
    if (department) {
      response["department"] = department;
      subDepartment = dummyData.departmentDetails.filter((data) => {
        return data.parentID == id;
      });
      console.log(subDepartment);
      response["subDepartment"] = subDepartment;
      res.json({
        status: 200,
        body: response,
      });
    }
  } else {
    try {
      var department = await DepartmentDetails.findById(id);
      console.log("department by id", department);
      if (department) {
        response["department"] = department;
        subDepartment = await DepartmentDetails.find({ parentID, id });
        response["subDepartment"] = subDepartment;
        res.json({
          status: 200,
          message: "Success",
          body: response,
        });
      } else {
        res.json({
          status: 501,
          message: "No record found",
        });
      }
    } catch (err) {
      console.log("Error in fetching department by id", err);
      res.json({
        status: 501,
        message: "Failure",
      });
    }
  }
};
