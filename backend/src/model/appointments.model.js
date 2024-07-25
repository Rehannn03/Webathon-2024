import mongoose,{Schema} from "mongoose";

const appointmentSchema=new Schema({
    patientId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    doctorId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Doctor'
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['pending','approved','rejected'],
        required:true,
        default:'pending'
    },
    day:{
        type:String,
        required:true
    },
    symptoms:{
        type:String,
        required:true
    }
},
{timestamps:true})


export const Appointment=mongoose.model('Appointment',appointmentSchema)
