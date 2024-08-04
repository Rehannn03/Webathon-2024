import Doctor from "../model/doctor.model";
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

export {
    verifyDoctor
}