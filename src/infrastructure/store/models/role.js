import LocalFsDB from '../../fake-db/LocalFsDB.js'

class Role extends LocalFsDB {
  constructor(role) {
    super()
    this.role = role
  }
}

export default Role