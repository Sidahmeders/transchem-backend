import { Router } from 'express'
import { authentication } from '../controllers/index.js'

const router = Router()
const { register, login } = authentication

router.post('/register', register)
router.post('/login', login)

export default router