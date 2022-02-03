//  function responsible for check next approval
const MrfRequest = require("../models/mrfRequest")

exports.mrfApproval = async(mrfId)=>{
return new Promise(async (resolve,reject)=>{
    console.log("hello i am approval");
    var mrf
    var finalApproval = false

    MrfRequest.findById(mrfId).then(async(result)=>{
        mrf = result
        console.log("mrf",mrf);
        if(!mrf.currentApprover.approverId ){
            await MrfRequest.findByIdAndUpdate(mrfId,{currentApprover : mrf.approvals[0]})
            resolve("Approval Pending")
            return
        }
        if (mrf.currentApprover.isAction && mrf.currentApprover.status == "accepted"){
            //update the  single approver to next approver
            mrf.approvals.map(async (approver)=>{
                    if(approver.isAction == false){
                       finalApproval = false 
                       await MrfRequest.findByIdAndUpdate(mrfId,{currentApprover : approver})
                       resolve("next")
                       return
                    }
                    else {
                        finalApproval = true
                    }
            })

            if(finalApproval){
                await MrfRequest.findByIdAndUpdate(mrfId,{status : "approved"})
                resolve("approved")
                return 
            }
        }

        if(mrf.currentApprover.isAction && mrf.currentApprover.status == "rejected"){
            await MrfRequest.findByIdAndUpdate(mrfId,{status : "rejected"})
            resolve("rejected")
            return 
        }
    })
})
    
}