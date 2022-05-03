import { admin_ability, owner_ability, installer_ability, operator_ability } from '../../constants/abilities.js'
import { userService, roleService } from '../../domain/services/index.js'

const { listUsers, addUser, updateUser } = userService
const { listRoles, addRole, updateRole } = roleService

// ** authentication controllers
import makeRegister from './authentication/register.js'
import makeLogin from './authentication/login.js'
// ** users controllers
import makeGetUsers from './users/get-users.js'
import makePutUser from './users/put-user.js'
// ** access control controllers
import makeGetRoles from './accessControl/get-roles.js'
import makePostRole from './accessControl/post-role.js'
import makePutRole from './accessControl/put-role.js'

export const authentication = {
  register: makeRegister({ addUser }),
  login: makeLogin({ admin_ability, owner_ability, installer_ability, operator_ability })
}

export const users = {
  getUsers: makeGetUsers({ listUsers }),
  putUser: makePutUser({ updateUser })
}

export const accessControl = {
  getRoles: makeGetRoles({ listRoles }),
  postRole: makePostRole({ addRole }),
  putRole: makePutRole({ updateRole })
}
