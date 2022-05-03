import { Router } from 'express'
import authRoutes from './authRoutes.js'
import usersRoutes from './usersRoutes.js'
import accessRoutes from './accessRoutes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/users', usersRoutes)
router.use('/access', accessRoutes)

export default router