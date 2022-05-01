import { Router } from 'express'
import { listRoles, addRoles, updateRoles } from '../controllers/index.js'

const router = Router()

router.get('/roles', listRoles)
router.post('/roles', addRoles)
router.put('/roles', updateRoles)

export default router