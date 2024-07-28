import express from 'express';
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateProfile
} from '../controllers/user.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';
import {upload} from '../middleware/multer.middleware.js'
const router=express.Router();


router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/logout',verifyJWT,logoutUser)
router.get('/profile',verifyJWT,getUserProfile)
router.patch('/profile',verifyJWT,upload.single('avatar') ,updateProfile)

export default router;