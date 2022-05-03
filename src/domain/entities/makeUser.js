const USER_ROLES = {
  admin: 'ADMIN',
  owner: 'OWNER',
  installer: 'INSTALLER',
  operator: 'OPERATOR'
}

export default function buildMakeUser({ getUniqueId }) {
  return function makeUser({ 
    id = getUniqueId(),
    fullName,
    email,
    phone,
    passwordHash,
    roleName,
    roleId,
    isAuthorized = false,
    createdAt = Date.now()
  }) {
    if (!id) throw Error('User must have an id')
    if (!email) throw Error('User must have an email')
    if (!passwordHash) throw Error('User must have a passwordHash')
    if (!roleName || !roleId) throw Error('User must have a valid roleName and roleId')
    // if (!Object.values(USER_ROLES).includes(roleName)) throw Error('User must have a valid roleName')

    return Object.freeze({
      get id() { return id },
      get roleName() { return roleName },
      get roleId() { return roleId },
      get email() { return email },
      get fullName() { return fullName },
      get phone() { return phone },
      get passwordHash() { return passwordHash },
      get createdAt() { return createdAt },
      get isAuthorized() { return isAuthorized },
      get isAdmin() { return roleName === USER_ROLES.admin },

      giveAccess() {
        isAuthorized = true
      },
      removeAccess() {
        isAuthorized = false
      }
    })
  }
}
