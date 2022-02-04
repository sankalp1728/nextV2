const MrfRequest = require("../models/mrfRequest");
const User = require("../models/user.js");
const Position = require("../models/position");
const mrfService = require("../services/mrfapproval");
// const { findById } = require("../models/position");

exports.createMrf = async (req, res) => {
  var mrfRequest;
  var mrfData = req.body;
  var approvals = [];
  var position = await Position.findById(req.body.positionID);

  if (!position) {
    res.json({
      status: 500,
      position: "No Position Found",
    });
  }

  var approvers = position.approverList;
  if (approvers) {
    approvers.map((data) => {
      var approver = {};
      approver["createdAt"] = new Date();
      approver["approverID"] = data;
      approver["isAction"] = false;
      approver["escalated"] = false;
      approver["status"] = "";
      approvals.push(approver);
    });
    mrfData["approvals"] = approvals;
    mrfRequest = new MrfRequest(mrfData);
    mrfRequest
      .save()
      .then(async (response) => {
        // set the current approval
        var serviceResponse = await mrfService.mrfApproval(response._id);
        res.json({
          status: 200,
          message: serviceResponse,
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          status: 500,
          message: "Mrf creation failed",
        });
      });
  } else {
    console.log("No approvers found");
    return;
  }
};

exports.approval = async (req, res) => {
  // const isAction = req.body.isAction
  const status = req.body.status;
  const mrfId = req.body.id;
  const userId = req.body.userId;

  MrfRequest.findById(mrfId)
    .then(async (result) => {
      if (result.mrfStatus == "approved") {
        res.json({
          status: 200,
          message: "mrf already approved",
        });
        return
      }
      if (result.mrfStatus == "rejected") {
        res.json({
          status: 200,
          message: "mrf already rejected",
        });
        return
      }

      var currentApprover = result.currentApprover;

      if (currentApprover.approverID.toString() == userId) {
        result.approvals.map(async (data, index) => {
          //     console.log("asaasasa",data);
          if (data.approverID.toString() == userId) {
            result.approvals[index].status = status;
            await result.save();
            try {
              var serviceResponse = await mrfService.mrfApproval(mrfId);
              res.json({
                status: 200,
                message: serviceResponse,
              });
            } catch (err) {
              console.log(err);
            }
          }
        });
      } else {
        res.json({
          status: 200,
          message: "user not permitted",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
