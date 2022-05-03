import { Router } from 'express'
import { users } from '../controllers/index.js'

const router = Router()
const { getUsers, putUser } = users

router.get('/', getUsers)
router.put('/:id', putUser)

export default router