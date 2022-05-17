import authRoutes from './authRoutes.js'
import accessRoutes from './accessRoutes.js'
import usersRoutes from './usersRoutes.js'
import sitesRoutes from './sitesRoutes.js'

const routes = [
  ...authRoutes,
  ...accessRoutes,
  ...usersRoutes,
  ...sitesRoutes
]

export default routes