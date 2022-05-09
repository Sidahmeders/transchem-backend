import { Router } from 'express'
import { sites } from '../controllers/index.js'

const router = Router()
const { getSites } = sites

router.get('/', getSites)

export default router