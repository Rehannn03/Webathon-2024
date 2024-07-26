import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin:true,
    credentials:true,
    methods:'GET,POST,PUT,DELETE,PATCH',
    allowedHeaders:'Content-Type,Authorization'
}))

import userRouter from './routes/user.routes.js';
import doctorRouter from './routes/doctor.routes.js';

app.use('/api/users',userRouter)
app.use('/api/doctors',doctorRouter)



export default app;
