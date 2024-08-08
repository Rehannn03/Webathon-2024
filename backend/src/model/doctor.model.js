import mongoose,{Schema} from "mongoose";

const doctorSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    specialization:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    consultationFee:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        default:0
    },
    reviews:{
        type:Number,
        required:true,
        default:0
    },
    verified:{
        type:Boolean,
        required:true,
        default:false
    },
    degree:{
        type:String,
    }
},{timestamps:true})

const Doctor=mongoose.model('Doctor',doctorSchema)


export default Doctor;

