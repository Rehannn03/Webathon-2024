import {
    verifyDoctor,
    getAllEarnings
} from '../controllers/admin.controller.js'
import express from 'express'
import { verifyJWT } from '../middleware/auth.middleware.js'
const router = express.Router()

router.post('/verify-doctor',verifyJWT,verifyDoctor)
router.get('/earnings',verifyJWT,getAllEarnings)
export default router
