import { getUniqueId } from '../../utils.js'

import Ability from '../valueObjects/Ability.js'
import Actions from '../valueObjects/Actions.js'

import buildMakeUser from './makeUser.js'
import buildMakeRole from './makeRole.js'

const makeUser = buildMakeUser({ getUniqueId })
const makeRole = buildMakeRole({ Ability })

// ** small example creating a role for users
// const tanksActions = new Actions({ canRead: true, canCreate: true })
// const alertsActions = new Actions({ canRead: true })
// const permissions = [new Ability(tanksActions, 'tanks'), new Ability(alertsActions, 'alerts')]
// const newRole = makeRole({ name: 'manager', permissions})
// console.log(newRole.name, newRole.permissions, '++++')

export { makeUser, makeRole }