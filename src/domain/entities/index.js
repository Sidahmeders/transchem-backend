import { getUniqueId, buildImages } from '../../infrastructure/utils.js'

import buildMakeUser from './makeUser.js'
import buildMakeRole from './makeRole.js'
import buildMakeSite from './makeSite.js'

const makeUser = buildMakeUser({ getUniqueId })
const makeRole = buildMakeRole({ getUniqueId, buildImages })
const makeSite = buildMakeSite({ getUniqueId })

export { makeUser, makeRole, makeSite }