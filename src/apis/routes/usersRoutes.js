import { Router } from 'express'
import { users } from '../controllers/index.js'

const router = Router()
const { getUsers } = users

router.get('/', getUsers)

export default router