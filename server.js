import express, { Router } from 'express'
import cors from './cors.config.js'
import { admin_ability, owner_ability, installer_ability, operator_ability } from './roles.js'

const server = express()
const router = Router()

server.use(cors)
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

router.post('/login', (req, res) => {
  console.log(req.body)
  const { email, password } = req.body
  try {
    if (!email || !password) throw Error('please fill in the required fields')
    if (typeof email !== 'string') throw Error('email type has to be typeof "string"')
    
    const role = email.split('@')[0]
    const token = 'hard-coded-accessToken'
    const data = {
      id: 7,
      role,
      avatar: '/static/media/avatar-s-11.1d46cc62.jpg',
      username: 'Sidahmed',
      fullName: 'Sidahmed Bou',
      accessToken: token,
      refreshToken: token
    }
    
    res.status(200)
    
    if (role === 'admin') res.json({ ...data, ability: admin_ability })
    else if (role === 'owner') res.json({ ...data, ability: owner_ability })
    else if (role === 'installer') res.json({ ...data, ability: installer_ability })
    else if (role === 'operator') res.json({ ...data, ability: operator_ability })
    else res.json({ ...data, ability: [] })
  } catch(err) {
    console.log(err)
    res.statusCode(400).json({ message: err.message })
  }
})

server.use('/api', router)

const PORT = process.env.PORT || 5000
server.listen(PORT, console.log(`server running on port ${PORT}..`))