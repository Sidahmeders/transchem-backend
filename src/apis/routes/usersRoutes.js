import { checkAuthorization } from '../middlewares/index.js'
import { users } from '../controllers/index.js'

const usersRoutes = [
  {
    method: 'GET',
    url: '/api/users',
    preHandler: checkAuthorization,
    handler: users.getUsers,
    // schema: {}
  },
  {
    method: 'PUT',
    url: '/api/users/:id',
    preHandler: checkAuthorization,
    handler: users.putUser,
    // schema: {}
  }
]

export default usersRoutes