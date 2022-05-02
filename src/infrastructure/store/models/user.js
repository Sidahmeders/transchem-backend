import LocalFsDB from '../../fake-db/LocalFsDB.js'

class User extends LocalFsDB {
  constructor() {
    super()
    this.document = []
  }
}

export default User