import LocalFsDB from '../../fake-db/LocalFsDB.js'

class User extends LocalFsDB {
  constructor(user) {
    super()
    this.user = user
  }
}

module.exports = User
