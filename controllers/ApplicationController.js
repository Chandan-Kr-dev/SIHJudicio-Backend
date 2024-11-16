import { applications } from "../models/BailApplications.models.js";
import { Users } from "../models/user.models.js";

const apply = async (req,res) => {
  const {
    Name,
    FName,
    Adharnum,
    adharimg,
    EId,
    FirDate,
    Crime,
    JudgeName,
    LawyerName,
    TrialDate,
   
  } = req.body;
  console.log(req.body);

  try {
    const judge = await Users.findOne({ Email: JudgeName });
    const Lawyer = await Users.findOne({ Email: LawyerName });

    if(await applications.findOne({AddharNum:Adharnum})){
      return res.json("Already applied for Bail")
    }
    const Application=await applications.create({
        lawyer_id:Lawyer._id,
        judge_id:judge._id,
        ProfileInfo:{
            Name:Name,
            FathersName:FName,
            AddharNum:Adharnum,
            AddharImage:adharimg,
            ElectionId:EId,
            Firdate:FirDate,
            Crime:Crime,


        },
        Descision_Date:TrialDate,
        

    })
    if(Application){
        res.json("Application submitted successfully");
    }

  } catch (error) {
    console.error(error);
    res.json("Error in applying for bail");
  }
};

const getStatus=async(req,res)=>{
    try {
        const application=await applications.find()
        if(application){
            res.json(application)
        }

    } catch (error) {
        console.error(error);
        res.json("Error in getting application status");
    }
}

const acceptApplication=async(req,res)=>{
  const { applicationId } = req.body;
  console.log(req.body);
  try {
    const application=await applications.findByIdAndUpdate(applicationId,{Status: "Accepted"});
    if(application){
        res.json("Application accepted successfully");
    }
    

  } catch (error) {
    console.error(error);
    res.json("Error in accepting application")
  }
}
const RejectApplication=async(req,res)=>{
  const { applicationId } = req.body;
  console.log(req.body);
  try {
    const application=await applications.findByIdAndUpdate(applicationId,{Status: "Rejected"});
    if(application){
        res.json("Application Rejected successfully");
    }
    

  } catch (error) {
    console.error(error);
    res.json("Error in application")
  }
}
const VerifyApplication=async(req,res)=>{
  const { applicationId } = req.body;
  console.log(req.body);
  try {
    const application=await applications.findByIdAndUpdate(applicationId,{Status: "Verified"});
    if(application){
        res.json("Application Verified successfully");
    }
    

  } catch (error) {
    console.error(error);
    res.json("Error in application")
  }
}

export default {apply,getStatus,acceptApplication,RejectApplication,VerifyApplication}