import { Router } from 'express'
import authRoutes from './authRoutes.js'
import usersRoutes from './usersRoutes.js'
import accessRoutes from './accessRoutes.js'
import sitesRoutes from './sitesRoutes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/users', usersRoutes)
router.use('/access', accessRoutes)
router.use('/sites', sitesRoutes)

export default router