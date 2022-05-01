import { admin_ability, owner_ability, installer_ability, operator_ability } from '../../constants/abilities.js'
import { usersDB, rolesDB } from '../../infrastructure/store/index.js'
import { makeRole } from '../../domain/entities/index.js'

// Controllers Import
import makeRegister from './register.js'
import makeLogin from './login.js'
import makeListRoles from './list-roles.js'
import makeAddRoles from './add-roles.js'

const register = makeRegister({ usersDB })
const login = makeLogin({ admin_ability, owner_ability, installer_ability, operator_ability })
const listRoles = makeListRoles({ rolesDB })
const addRoles = makeAddRoles({ rolesDB, makeRole })

export { login, register, listRoles, addRoles }