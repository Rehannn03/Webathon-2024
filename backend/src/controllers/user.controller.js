import User from '../model/user.model.js'
import { ApiError } from '../utils/apiError.js'
import { ApiResponse } from '../utils/apiResponse.js'
import {asyncHandler} from '../utils/asyncHandler.js'
import uploadOnCloudinary from '../utils/cloudinary.js'
const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password,role}=req.body
    const existingUser=await User.findOne({email})

    if(existingUser){
        throw new ApiError(400,'User already exists')
    }

    const user=await User.create({
        username,
        email,
        password,
        role,
        profile,
        refreshToken
    })
    const accessToken=await user.generateAccessToken()
    const refreshToken=await user.generateRefreshToken()
    return res
    .status(201)
    .cookie('accessToken',accessToken,{
        httpOnly:true,
        sameSite:'none',
        secure:true
    })
    .cookie('refreshToken',refreshToken,{
        httpOnly:true,
        sameSite:'none',
        secure:true
    })
    .json(new ApiResponse(201,{user}))
})

const loginUser=asyncHandler(async(req,res)=>{
    const {email,password,role}=req.body

    const user=await User.findOne({email})

    if(!user){
        throw new ApiError(404,'User not found')
    }

    const isPasswordCorrect=await user.isPasswordCorrect(password)

    if(!isPasswordCorrect){
        throw new ApiError(400,'Invalid credentials')
    }

    const accessToken=await user.generateAccessToken()
    const refreshToken=await user.generateRefreshToken()
    const options={
        httpOnly:true,
        secure:true,
        sameSite:'None'
    }

    return res
    .status(200)
    .cookie('accessToken',accessToken,options)
    .cookie('refreshToken',refreshToken,options)
    .json(new ApiResponse(200,{user}))
})

const logoutUser=asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(req.user._id,
        {
        $set:{
            refreshToken:undefined
        }
    },
    {
        new:true
    }
)
    const options={
        httpOnly:true,
        secure:true,
        sameSite:'None'
    }

    return res
    .status(200)
    .clearCookie('accessToken',options)
    .clearCookie('refreshToken',options)
    .json(new ApiResponse(200,{
        message:'Logged out successfully'
    }))
})

const getUserProfile=asyncHandler(async(req,res)=>{
    return res
    .status(200)
    .json(new ApiResponse(200,{
        user:req.user
    }))
})

const updateProfile=asyncHandler(async(req,res)=>{
    const {profile}=req.body

    const avatarPath=req.files?.avatar[0]?.path
    const avatar=await uploadOnCloudinary(avatarPath)
    const user=await User.findByIdAndUpdate(req.user._id,
        {
        $set:{
            profile,
            avatar
        }
    },
    {
        new:true
    }
)
    
        return res
        .status(200)
        .json(new ApiResponse(200,{
            user
        }))
})


export {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateProfile
}