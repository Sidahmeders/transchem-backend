import { usersDB, rolesDB } from '../../infrastructure/store/index.js'
import { admin_ability, owner_ability, installer_ability, operator_ability } from '../../constants/abilities.js'

// Controllers Import
import makeRegister from './register.js'
import makeLogin from './login.js'
import makeListRoles from './list-roles.js'

const register = makeRegister({ usersDB })
const login = makeLogin({ admin_ability, owner_ability, installer_ability, operator_ability })
const listRoles = makeListRoles({ rolesDB })

export { login, register, listRoles }