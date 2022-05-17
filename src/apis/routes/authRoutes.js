import { authentication } from '../controllers/index.js'

const authRoutes = [
  {
    method: 'POST',
    url: '/api/auth/login',
    handler: authentication.login,
    // schema: {}
  },
  {
    method: 'POST',
    url: '/api/auth/register',
    handler: authentication.register,
    // schema: {}
  }
]

export default authRoutes