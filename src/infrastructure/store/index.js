import User from './models/user.js'

import makeUsersDB from './repositories/usersDB.js'

export default {
  usersDB: makeUsersDB({ model: new User() })
}