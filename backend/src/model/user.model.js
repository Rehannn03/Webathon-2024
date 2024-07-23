import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['patient','doctor','admin','dietitian'],
        required:true
    },
    profile:{
        type:Object,
        required:true,
        default:{
            age:0,
            contact:0,
            address:"",
        }
    }
},{
    timestamps:true
})


const User=mongoose.model('User',userSchema)

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next()
    }
    
    this.password=await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            username:this.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn:process.env.JWT_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            _id:this._id
        },
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn:process.env.REFRESH_EXPIRY
        }
    )

}

export default User;