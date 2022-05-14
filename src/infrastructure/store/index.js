import User from './models/user.js'
import Role from './models/role.js'
import Site from './models/site.js'
import Token from './models/token.js'

import { makeUser, makeRole, makeSite, makeToken } from '../../domain/entities/index.js'

import makeUsersDB from './repositories/usersDB.js'
import makeRolesDB from './repositories/rolesDB.js'
import makeSitesDB from './repositories/sitesDB.js'
import makeTokensDB from './repositories/tokensDB.js'

const usersDB = makeUsersDB({ makeUser, model: new User() })
const rolesDB = makeRolesDB({ makeRole, model: new Role() })
const sitesDB = makeSitesDB({ makeSite, model: new Site() })
const tokensDB = makeTokensDB({ makeToken, model: new Token() })

export { usersDB, rolesDB, sitesDB, tokensDB }