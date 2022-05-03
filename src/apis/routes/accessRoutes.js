import { Router } from 'express'
import { accessControl } from '../controllers/index.js'

const router = Router()
const { getRoles, postRole, putRole } = accessControl

router.get('/roles', getRoles)
router.post('/roles', postRole)
router.put('/roles', putRole)

export default router