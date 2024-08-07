import Appointment from "../model/appointments.model.js";
import Doctor from "../model/doctor.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const verifyDoctor = asyncHandler(async (req,res)=>{
    const {doctorId,status}=req.body
    const doctor=await Doctor.findOneAndUpdate({
        _id:doctorId
    },
    {
        $set:{
            isVerified:status
        }
    },
    {
        new:true
    })

    if(!doctor){
        throw new ApiError(404,'Doctor not found')
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200,{
            message:'Doctor verified successfully',
            doctor
        })
    )
})

const getAllEarnings=asyncHandler(async(_,res)=>{
    const appointments=Appointment.aggregate([
        {
            $match:{
                status:'completed'
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
            $group:{
                _id:'$doctorId',
                totalAmount:{
                    $sum:'$doctor.consultationFee'
                }
            }
        }
    ])

    const totalAppointment= await Appointment.countDocuments()

    const totalPatientDiagnosied=(await appointments).length

    const totalMoneyEarned=(await appointments).reduce((acc,curr)=>{
        return acc+curr.totalAmount
    },0)

    return res
    .status(200)
    .json(
        new ApiResponse(200,{
            earnings:totalMoneyEarned,
            completed:totalPatientDiagnosied,
            total:totalAppointment
        })
    )
})


export {
    verifyDoctor,
    getAllEarnings
}