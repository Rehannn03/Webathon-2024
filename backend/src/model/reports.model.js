import mongoose,{Schema} from "mongoose";

const reportSchema=new Schema({
    patientId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    reports:[{
        type:Object,
        required:true,
        default:{
            title:"",
            description:"",
            fileURL:""
        }
    }],
    details:{
        type:String,
        required:true
    },
    diagnosis:{
        type:String,
        required:true
    },
    prescription:{
        type:String,
        required:true
    }
})

const Report=mongoose.model('Report',reportSchema)

export default Report;