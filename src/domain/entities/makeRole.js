export default function buildMakeRole({ Resource }) {
  return function makeRole({ name = '', createdByRole = '', createdByUser = 'Object-ID', permissions = [] }) {
    permissions.forEach((resource) => {
      if (!(resource instanceof Resource)) throw Error('props.permissions.resource has to be and instance of Resource')
    })
    
    return Object.freeze({
      get name() { return name },
      get createdByRole() { return createdByRole },
      get createdByUser() { return createdByUser },
      get permissions() { return permissions }
    })
  }
}