import User from "../model/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Appointment from "../model/appointments.model.js";
import Report from "../model/reports.model.js";
import Consultation from "../model/consultation.model.js";
const scheduleAppointment = asyncHandler(async(req,res)=>{
    const {doctorId,date,time,day,symptoms,note}=req.body
    const appointment=await Appointment.create({
        patientId:req.user._id,
        doctorId,
        date,
        time,
        day,
        symptoms,
        note
    })

    if(!appointment){
        throw new ApiError(400,'Appointment not created')
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201,{
            message:'Appointment created successfully',
            appointment
        })
    )
})

const viewAppointments=asyncHandler(async(req,res)=>{
    console.log(req.user._id);
    const appointments=await Appointment.aggregate([
        {
            $match:{
                patientId:req.user._id
            }
        },
        {
            $lookup:{
                from:'doctors',
                localField:'doctorId',
                foreignField:'_id',
                as:'doctor'
            }
        },
        {
            $unwind:'$doctor'
        },
        {
            $lookup:{
                from:'users',
                localField:'doctor.userId',
                foreignField:'_id',
                as:'doctor.user'
            }
        },
        {
            $unwind:'$doctor.user'
        },
        {
            $project:{
                _id:1,
                date:1,
                time:1,
                status:1,
                day:1,
                symptoms:1,
                note:1,
                'doctor.user.name':1,
                'doctor.user.avatar':1,
                'doctor.specialization':1,
                'doctor.qualification':1,
                'doctor.experience':1,
                'doctor.consultationFee':1
            }
        }
    ])

    return res
    .status(200)
    .json(
        new ApiResponse(200,{
            appointments
        })
    )
})

const addReports=asyncHandler(async(req,res)=>{
    const {title,description}=req.body
    const pdfPath=req.file?.path
    const reportPdf=await uploadOnCloudinary(pdfPath)
    const report=await Report.create({
        patientId:req.user._id,
        reports:[{
            title,
            description,
            fileURL:reportPdf?.secure_url
        }],
    })

    if(!report){
        throw new ApiError(400,'Report not created')
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201,{
            message:'Report created successfully',
            report
        })
    )

})

const viewConsultations=asyncHandler(async(req,res)=>{
    const appointment=await Appointment.findOne({patientId:req.user._id})

    if(!appointment){
        throw new ApiError(404,'Appointment not found')
    }

    const consultation=await Consultation.findOne({appointmentId:appointment._id}).select('-appointmentId -_id -createdAt -updatedAt -__v')


    return res
    .status(200)
    .json(
        new ApiResponse(200,{
            consultation
        })
    )
})

export{
    scheduleAppointment,
    viewAppointments,
    addReports,
    viewConsultations
}