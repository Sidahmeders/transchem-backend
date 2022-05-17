import { checkAuthorization } from '../middlewares/index.js'
import { sites } from '../controllers/index.js'

const sitesRoutes = [
  {
    method: 'GET',
    url: '/api/sites',
    preHandler: checkAuthorization,
    handler: sites.getSites,
    // schema: {}
  },
  {
    method: 'POST',
    url: '/api/sites',
    preHandler: checkAuthorization,
    handler: sites.postSite,
    // schema: {}
  }
]

export default sitesRoutes