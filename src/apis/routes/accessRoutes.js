import { Router } from 'express'
import { listRoles, addRoles } from '../controllers/index.js'

const router = Router()

router.get('/roles', listRoles)
router.post('/roles', addRoles)

export default router