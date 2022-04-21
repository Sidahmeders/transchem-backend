import { admin_ability, owner_ability, installer_ability, operator_ability } from '../../roles.js'

// Controllers Imports
import makeLogin from './login.js'

const login = makeLogin({ admin_ability, owner_ability, installer_ability, operator_ability })

export { login }