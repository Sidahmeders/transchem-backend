import { getUniqueId } from '../../utils.js'

import Resource from '../valueObjects/Resource.js'
import Actions from '../valueObjects/Actions.js'

import buildMakeUser from './makeUser.js'
import buildMakeRole from './makeRole.js'

const makeUser = buildMakeUser({ getUniqueId })
const makeRole = buildMakeRole({ getUniqueId })

// ** small example creating a role for users
// const tanksActions = new Actions({ canRead: true, canCreate: true })
// const alertsActions = new Actions({ canRead: true })
// const permissions = [new Resource('tanks', tanksActions), new Resource('alerts', alertsActions)]
// const newRole = makeRole({ name: 'manager', createdByRole: 'admin', createdByUser: '#1234', permissions})
// console.log(newRole.name, newRole.createdByRole, newRole.createdByUser, newRole.permissions, '++++')

export { makeUser, makeRole }