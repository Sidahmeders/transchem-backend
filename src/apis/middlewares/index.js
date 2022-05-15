import { verifyAccessToken, verifyRefreshToken, generateAuthTokens } from '../../infrastructure/services/index.js'

import makeCheckAuthorization from './checkAuthorization.js'

const checkAuthorization = makeCheckAuthorization({ verifyAccessToken, verifyRefreshToken, generateAuthTokens })

export { checkAuthorization }