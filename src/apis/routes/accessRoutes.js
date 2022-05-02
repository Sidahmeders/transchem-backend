import { Router } from 'express'
import { accessControl } from '../controllers/index.js'

const router = Router()
const { listRoles, addRoles, updateRoles } = accessControl

router.get('/roles', listRoles)
router.post('/roles', addRoles)
router.put('/roles', updateRoles)

export default router