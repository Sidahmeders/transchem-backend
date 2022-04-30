export default function buildMakeRole({ getUniqueId }) {
  return function makeRole({ id = getUniqueId(), name = '', createdByRole = '', createdByUser = '', permissions = [] }) {
    return Object.freeze({
      get id() { return id },
      get name() { return name },
      get createdByRole() { return createdByRole },
      get createdByUser() { return createdByUser },
      get permissions() { return permissions }
    })
  }
}