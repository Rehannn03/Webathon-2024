import 'dotenv/config.js'
import connectDB from "../src/db/index.js";
import app from "../src/app.js";


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server running on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Error connecting",error.message)
})