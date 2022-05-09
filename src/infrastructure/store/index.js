import User from './models/user.js'
import Role from './models/role.js'
import Site from './models/site.js'

import { makeUser, makeRole, makeSite } from '../../domain/entities/index.js'

import makeUsersDB from './repositories/usersDB.js'
import makeRolesDB from './repositories/rolesDB.js'
import makeSitesDB from './repositories/sitesDB.js'

const usersDB = makeUsersDB({ makeUser, model: new User() })
const rolesDB = makeRolesDB({ makeRole, model: new Role() })
const sitesDB = makeSitesDB({ makeSite, model: new Site() })

export { usersDB, rolesDB, sitesDB }