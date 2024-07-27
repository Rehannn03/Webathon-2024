import mongoose from "mongoose";

const consultationSchema=new mongoose.Schema({
    appointmentId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Appointment'
    },
    symptoms:[
        {
            type:String,
            required:true
        }
    ],
    diagnosis:{
        type:String,
        required:true
    },
    prescription:[
        {
            type:Object,
            required:true,
            default:{
                medicine:'',
                morning:0,
                afternoon:0,
                night:0,
                notes:''
            }
        }
    ],
    followUp:{
        type:String,
        required:true
    },
    reports:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Report'
    }

},{timestamps:true})

const Consultation=mongoose.model('Consultation',consultationSchema)

export default Consultation;