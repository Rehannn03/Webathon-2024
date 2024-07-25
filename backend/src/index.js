import 'dotenv/config.js'
import connectDB from "./db/index.js";
import app from "./app.js";


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server running on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Error connecting",error.message)
})