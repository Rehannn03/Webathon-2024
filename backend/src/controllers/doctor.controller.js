import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import Doctor from "../model/doctor.model.js";
import Appointment from "../model/appointments.model.js";
import Consultation from "../model/consultation.model.js";
const updateInfo=asyncHandler(async(req,res)=>{
    const user=req.user

    const {specialization,experience,qualification,consultationFee}=req.body

    const checkDoctor=await Doctor.findOne({userId:user._id})
    if(checkDoctor){
        const doctor=await Doctor.findOneAndUpdate({
            userId:user._id
        },
        {
            $set:{
                specialization,
                experience,
                qualification,
                consultationFee
            }
        },
        {
            new:true
        })

        if(!doctor){
            throw new ApiError(400,'Doctor not updated')
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200,{
                message:'Doctor updated successfully',
                doctor
            })
        )
    }
    
    const doctor=await Doctor.create({
        userId:user._id,
        specialization,
        experience,
        qualification,
        consultationFee
    })

    if(!doctor){
        throw new ApiError(400,'Doctor not created')
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201,{
            message:'Doctor created successfully',
            doctor
        })
    )
})

const getDoctor=asyncHandler(async(req,res)=>{
    const doctor=await Doctor.findOne({userId:req.user._id}).select('-createdAt -updatedAt -__v').populate('userId','name email profile')
    if(!doctor){
        throw new ApiError(404,'Doctor not found')
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200,{
            doctor
        })
    )
})

const getAllDoctors=asyncHandler(asyncHandler(async(_,res)=>{
    const doctors=await Doctor.find().select('-createdAt -updatedAt -__v').populate('userId','name email profile')
    return res
    .status(200)
    .json(
        new ApiResponse(200,{
            doctors
        })
    )
}))

const getAppointments=asyncHandler(async(req,res)=>{
    const checkVerify=await Doctor.findOne({userId:req.user._id})

    if(checkVerify.verified==false){
        throw new ApiError(403,'Doctor not verified')
    }

    const appointments=await Appointment.aggregate([
        {
            $match:{
                doctorId:checkVerify._id
            }
        },
        {
            $lookup:{
                from:'users',
                localField:'patientId',
                foreignField:'_id',
                as:'patient'
            }
        },
        {
            $unwind:'$patient'
        },
        {
            $project:{
                _id:1,
                date:1,
                time:1,
                status:1,
                symptoms:1,
                day:1,
                patient:{
                    _id:1,
                    name:1,
                    email:1,
                    profile:1
                }
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

const updateAppointment=asyncHandler(async(req,res)=>{
    const {appointmentId,status,note}=req.body
    const checkVerify=await Doctor.findOne({userId:req.user._id})

    if(checkVerify.verified==false){
        throw new ApiError(403,'Doctor not verified')
    }
    if(status=='rejected' && !note){
        throw new ApiError(400,'Note is required for rejected appointments')   
    }

    const appointment=await Appointment.findByIdAndUpdate({
        _id:appointmentId
    },
    {
        $set:{
            status
        }
    },
    {
        new:true
    }).select('-createdAt -updatedAt -__v')

    if(!appointment){
        throw new ApiError(404,'Appointment not found')
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200,{
            message:'Appointment updated successfully',
            appointment
        })
    )
})

const fillConsultation=asyncHandler(async(req,res)=>{
    const {appointmentId,diagnosis,prescription,followUp,symptoms}=req.body
    const checkVerify=await Doctor.findOne({userId:req.user._id})

    if(checkVerify.verified==false){
        throw new ApiError(403,'Doctor not verified')
    }
    const consultation=await Consultation.create({
        appointmentId,
        diagnosis,
        prescription,
        followUp,
        symptoms
    })

    if(!consultation){
        throw new ApiError(400,'Consultation not created')
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201,{
            message:'Consultation created successfully',
            consultation
        })
    )
})


export {
    updateInfo,
    getDoctor,
    getAllDoctors,
    getAppointments,
    updateAppointment,
    fillConsultation
}