import LocalFsDB from '../../fake-db/LocalFsDB.js'

class User extends LocalFsDB {
  constructor(user) {
    super()
    this.user = user
  }
}

export default User