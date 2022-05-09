import { makeUser, makeRole, makeSite } from '../entities/index.js'
import { usersDB, rolesDB, sitesDB } from '../../infrastructure/store/index.js'
import { hashPassword, verifyPassword, issueToken } from '../../infrastructure/utils.js'

import makeListUsers from './users/list-users.js'
import makeAddUser from "./users/add-user.js"
import makeUpdateUser from './users/update-user.js'
import makeSignInUser from './users/signIn-user.js'

import makeListRoles from "./roles/list-roles.js"
import makeAddRole from "./roles/add-role.js"
import makeUpdateRole from "./roles/update-role.js"
import makeBuildAbility from './roles/build-ability.js'

import makeListSites from './sites/list-sites.js'
import makeAddSite from './sites/addSite.js'

export const userService = {
  listUsers: makeListUsers({ usersDB }),
  addUser: makeAddUser({ makeUser, usersDB, hashPassword }),
  updateUser: makeUpdateUser({ makeUser, usersDB }),
  signInUser: makeSignInUser({ usersDB, rolesDB, verifyPassword, issueToken })
}

export const roleService = {
  listRoles: makeListRoles({ rolesDB }),
  addRole: makeAddRole({ makeRole, rolesDB }),
  updateRole: makeUpdateRole({ rolesDB }),
  buildAbility: makeBuildAbility({ rolesDB })
}

export const siteService = {
  listSites: makeListSites({ sitesDB }),
  addSite: makeAddSite({ makeSite, sitesDB })
}