import { checkAuthorization } from '../middlewares/index.js'
import { accessControl } from '../controllers/index.js'

const accessRoutes = [
  {
    method: 'GET',
    url: '/api/access/roles',
    preHandler: checkAuthorization,
    handler: accessControl.getRoles,
    // schema: {}
  },
  {
    method: 'POST',
    url: '/api/access/roles',
    preHandler: checkAuthorization,
    handler: accessControl.postRole,
    // schema: {}
  },
  {
    method: 'PUT',
    url: '/api/access/roles/:id',
    preHandler: checkAuthorization,
    handler: accessControl.putRole,
    // schema: {}
  }
]

export default accessRoutes