import abilities, { admin_ability, owner_ability, installer_ability, operator_ability } from '../../constants/abilities.js'

// Controllers Imports
import makeRegister from './register.js'
import makeLogin from './login.js'

const register = makeRegister({ abilities })
const login = makeLogin({ admin_ability, owner_ability, installer_ability, operator_ability })

export { login, register }