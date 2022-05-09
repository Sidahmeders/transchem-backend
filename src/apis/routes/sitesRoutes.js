import { Router } from 'express'
import { sites } from '../controllers/index.js'

const router = Router()
const { getSites, postSite } = sites

router.get('/', getSites)
router.post('/', postSite)

export default router