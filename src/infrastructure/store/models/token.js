import LocalFsDB from '../../fake-db/LocalFsDB.js'

const tokens = []

class Token extends LocalFsDB {
  constructor() {
    super()
    this.document = tokens
  }
}

export default Token