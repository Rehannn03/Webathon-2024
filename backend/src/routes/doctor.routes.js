import express from 'express';
import {
    updateInfo,
    getDoctor,
    getAllDoctors,
    getAppointments,
    updateAppointment,
    fillConsultation,
    getSpecialistCount
} from '../controllers/doctor.controller.js';

import { verifyJWT } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/updateInfo',verifyJWT,updateInfo)
router.get('/getDoctor',verifyJWT,getDoctor)
router.get('/getAllDoctors',verifyJWT,getAllDoctors)
router.get('/getAppointments',verifyJWT,getAppointments)
router.patch('/updateAppointment',verifyJWT,updateAppointment)
router.post('/fillConsultation',verifyJWT,fillConsultation)
router.get('/getSpecialistCount',verifyJWT,getSpecialistCount)
export default router;