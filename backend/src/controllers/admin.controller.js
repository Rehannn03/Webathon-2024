import Appointment from "../model/appointments.model.js";
import Doctor from "../model/doctor.model.js";
import User from "../model/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
const verifyDoctor = asyncHandler(async (req,res)=>{
    const {doctorId}=req.body
    const doctor=await Doctor.findOneAndUpdate({
        _id:doctorId
    },
    {
        $set:{
            verified:true
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

const getAllDoctors=asyncHandler(asyncHandler(async(_,res)=>{
    const doctors=await Doctor.aggregate([
        {
            $lookup:{
                from:'users',
                localField:'userId',
                foreignField:'_id',
                as:'profile'
            }
        },
        {
            $unwind:'$profile'
        },
        {
            $project:{
                _id:1,
                specialization:1,
                verified:1,
                experience:1,
                qualification:1,
                consultationFee:1,
                degree:1,
                profile:{
                    _id:1,
                    name:1,
                    email:1,
                    avatar:1
                }
            }
        }
    ])
    return res
    .status(200)
    .json(
        new ApiResponse(200,{
            doctors
        })
    )
}))

const getAllpatients=asyncHandler(async(_,res)=>{
    const patients=await User.aggregate([
        {
            $match:{
                role:'patient'
            }
        },
        {
            $project:{
                _id:1,
                name:1,
                email:1,
                avatar:1,
                'profile.age':1,
                'profile.gender':1

            }
        }
    ])

    return res
    .status(200)
    .json(
        new ApiResponse(200,{
            patients
        })
    )
})

const getAllAppointments=asyncHandler(async(_,res)=>{
    const appointments=await Appointment.aggregate([
        {
          $lookup: {
            from: "doctors",
            localField: "doctorId",
            foreignField: "_id",
            as: "doctor"
          }
        },
        {
          $unwind:"$doctor"
        },
        {
          $lookup: {
            from: "users",
            localField: "doctor.userId",
            foreignField: "_id",
            as: "doctorInfo"
          }
        },
        {
          $unwind:"$doctorInfo"
        },
        {
          $lookup: {
            from: "users",
            localField: "patientId",
            foreignField: "_id",
            as: "patient"
          }
        },
        {
          $unwind:"$patient"
        },
        {
          $project: {
            'doctorInfo.name':1,
            'doctorInfo.email':1,
            'doctorInfo.avatar':1,
            'patient.name':1,
            'patient.email':1,
            'patient.avatar':1,
            date:1,
            time:1,
            status:1,
            note:1
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

const symptoms=asyncHandler(async(_,res)=>{
    const symptons=await Appointment.aggregate([
        {
            $unwind:'$symptoms'
        },
        {
            $group:{
                _id:'$symptoms',
                count:{
                    $sum:1
                }
            }
        },
        {
            $sort:{
                count:-1
            }
        }
    ])

    return res
    .status(200)
    .json(
        new ApiResponse(200,{
            symptons
        })
    )
})

const dailyAppointments=asyncHandler(async(_,res)=>{
    const appointments=await Appointment.aggregate([
        {
          $project: {
            date: { 
              $dateToString: 
              { format: "%Y-%m-%d", date: "$createdAt" 
              } 
            }
          }
        },
        {
          $group: {
            _id: "$date",
            count:{$sum:1}
          }
        },
        {
          $sort: {
            count: -1
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

const demographics=asyncHandler(async(_,res)=>{
    const city=await User.aggregate([
        {
            $group: {
              _id: "$profile.city",
              count:{$sum:1}
            }
          },
          {
            $sort: {
              count: -1
            }
          }
    ])

    const age=await User.aggregate([
        [
            {
              
            $project: {
                ageGroup: {
                  $switch: {
                    branches: [
                      { case: { $lt: ["$profile.age", 18] }, then: "Under 18" },
                      { case: { $lt: ["$profile.age", 30] }, then: "18-29" },
                      { case: { $lt: ["$profile.age", 40] }, then: "30-39" },
                      { case: { $lt: ["$profile.age", 50] }, then: "40-49" },
                      { case: { $lt: ["$profile.age", 60] }, then: "50-59" }
                    ],
                    default: "60 and above"
                  }
                },
              }
            },
            {
              $group: {
                _id: "$ageGroup",
                count:{$sum:1}
              }
            },
            {
              $sort: {
                count: -1
              }
            }
          ]
    ])

    const gender=await User.aggregate([
        {
            $group: {
                _id:"$profile.gender",
                count:{$sum:1}
            }
        },
        {
            $sort:{
                count:-1
            }
        }])
    return res
    .status(200)
    .json(
        new ApiResponse(200,{
            city,
            age,
            gender
        })
    )
})

//Count of (different)symtoms from appointments
//Count of daily appointments created
//Demigraphic data City and gender also age group
//IPFS storage of all data
export {
    verifyDoctor,
    getAllEarnings,
    getAllDoctors,
    getAllpatients,
    getAllAppointments,
    symptoms,
    dailyAppointments,
    demographics
}