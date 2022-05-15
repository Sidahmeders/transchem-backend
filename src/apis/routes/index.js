import { Router } from 'express'
import { checkAuthorization } from '../middlewares/index.js'

import authRoutes from './authRoutes.js'
import usersRoutes from './usersRoutes.js'
import accessRoutes from './accessRoutes.js'
import sitesRoutes from './sitesRoutes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/users', checkAuthorization, usersRoutes)
router.use('/access', checkAuthorization, accessRoutes)
router.use('/sites', checkAuthorization, sitesRoutes)

export default router