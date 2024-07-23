import mongoose from 'mongoose'

const connectDB=async()=>{
    try {
        const response=await mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`)
        console.log("Connected to DB ",response.connection.host)
    } catch (error) {
        console.log("Error connecting to DB",error.message)
        
    }
}

export default connectDB;