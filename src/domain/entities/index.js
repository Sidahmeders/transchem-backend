import { getUniqueId, buildImages } from '../../infrastructure/utils.js'

import buildMakeUser from './makeUser.js'
import buildMakeRole from './makeRole.js'

const makeUser = buildMakeUser({ getUniqueId })
const makeRole = buildMakeRole({ getUniqueId, buildImages })

export { makeUser, makeRole }