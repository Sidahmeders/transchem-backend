import User from './models/user.js'
import Role from './models/role.js'

import { makeUser, makeRole } from '../../domain/entities/index.js'

import makeUsersDB from './repositories/usersDB.js'
import makeRolesDB from './repositories/rolesDB.js'

const usersDB = makeUsersDB({ makeUser, model: new User() })
const rolesDB = makeRolesDB({ makeRole, model: new Role() })

export { usersDB, rolesDB }