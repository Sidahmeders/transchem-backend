import { getUniqueId, buildImages } from '../../infrastructure/utils.js'

import buildMakeUser from './makeUser.js'
import buildMakeRole from './makeRole.js'
import buildMakeSite from './makeSite.js'
import buildMakeToken from './makeToken.js'

const makeUser = buildMakeUser({ getUniqueId })
const makeRole = buildMakeRole({ getUniqueId, buildImages })
const makeSite = buildMakeSite({ getUniqueId })
const makeToken = buildMakeToken({ getUniqueId })

export { makeUser, makeRole, makeSite, makeToken }