import { makeUser, makeRole } from '../entities/index.js'
import { usersDB, rolesDB } from '../../infrastructure/store/index.js'
import { hashPassword } from '../../infrastructure/utils.js'

import makeAddUser from "./users/add-user.js"

import makeListRoles from "./roles/list-roles.js"
import makeAddRole from "./roles/add-role.js"
import makeUpdateRole from "./roles/update-role.js"

export const userService = {
  addUser: makeAddUser({ makeUser, usersDB, hashPassword }),
}

export const roleService = {
  listRoles: makeListRoles({ rolesDB }),
  addRole: makeAddRole({ makeRole, rolesDB }),
  updateRole: makeUpdateRole({ rolesDB })
}
