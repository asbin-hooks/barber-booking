import express from 'express';
import employeRoutes from './employeRoutes/index.js'
import imageRoutes from './imageRoutes/index.js'
import userRoutes from './userRoutes/index.js'
import adminRoutes from './adminRoutes/index.js'
import bookRoutes from './bookRoutes/index.js'



const router = express.Router();
router.use('/employe',employeRoutes)
router.use('/image',imageRoutes)
router.use ('/user',userRoutes)
router.use ('/admin',adminRoutes)
router.use ('/book',bookRoutes)

export default router;
