import mongoose from "mongoose";

const applicationSchema=new mongoose.Schema({
    CaseID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cases'
    },
    lawyer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    Judge_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    Status:{
        type:String,
        default:'Pending',
        required:true
    },
    application_Date:{
        type:Date,
        default:Date.now()
    },
    Descision_Date:{
        type:Date,
        default:null
    },
    Bail_Amount:{
        type:String,
        required:trusted,

    },
    Condition:{
        type:Object,
        required:true,
        default:null
    },
    Descision:{
        type:String,
        default:null
    }
},{timestamps:true})

export const applications=new mongoose.model('applications',applicationSchema)
