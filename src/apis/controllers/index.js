import { admin_ability, owner_ability, installer_ability, operator_ability } from '../../constants/abilities.js'
// infrastructure
import { hashPassword } from '../../infrastructure/utils.js'
import { usersDB, rolesDB } from '../../infrastructure/store/index.js'
// domain entities
import { makeUser, makeRole } from '../../domain/entities/index.js'

// ** authentication controllers
import makeRegister from './authentication/register.js'
import makeLogin from './authentication/login.js'
// ** access control controllers
import makeListRoles from './accessControl/list-roles.js'
import makeAddRoles from './accessControl/add-roles.js'
import makeUpdateRoles from './accessControl/update-roles.js'

export const authentication = {
  register: makeRegister({ usersDB, makeUser, hashPassword }),
  login: makeLogin({ admin_ability, owner_ability, installer_ability, operator_ability })
}

export const accessControl = {
  listRoles: makeListRoles({ rolesDB }),
  addRoles: makeAddRoles({ rolesDB, makeRole }),
  updateRoles: makeUpdateRoles({ rolesDB })
}
