export default class Actions {
  constructor({ canRead = false, canCreate = false, canUpdate = false, canDelete = false }) {
    this.canRead = canRead
    this.canCreate = canCreate
    this.canUpdate = canUpdate
    this.canDelete = canDelete
  }
}
