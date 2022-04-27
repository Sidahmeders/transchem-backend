import { Router } from 'express'
import authRoutes from './authRoutes.js'
import accessRoutes from './accessRoutes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/access', accessRoutes)

export default router