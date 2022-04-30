export default class Actions {
  constructor({ canRead = false, canCreate = false, canUpdate = false, canDelete = false }) {
    this.read = canRead
    this.create = canCreate
    this.update = canUpdate
    this.delete = canDelete
  }
}
