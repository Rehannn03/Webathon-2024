import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary=async(filepath)=>{
    try {
        const response= await cloudinary.uploader.upload(filepath,{
            resource_type: "auto",
        })
        fs.unlinkSync(filepath)
        return response
    } catch (error) {
        console.log("Error uploading to cloudinary",error)
        fs.unlinkSync(filepath)
    }
}

export default uploadOnCloudinary