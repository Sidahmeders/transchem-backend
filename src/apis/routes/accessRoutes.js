import { Router } from 'express'
import { listRoles } from '../controllers/index.js'

const router = Router()

router.get('/roles', listRoles)

export default router