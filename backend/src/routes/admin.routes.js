import {
    verifyDoctor
} from '../controllers/admin.controller.js'
import express from 'express'
import { verifyJWT } from '../middleware/auth.middleware.js'
const router = express.Router()

router.post('/verify-doctor',verifyJWT,verifyDoctor)

export default router
