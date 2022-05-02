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
    passwordHash,
    roleName,
    roleId,
    isVerified = false,
    createdAt = Date.now()
  }) {
    if (!id) throw Error('User must have an id')
    if (!email) throw Error('User must have an email')
    if (!passwordHash) throw Error('User must have a passwordHash')
    // if (!Object.values(USER_ROLES).includes(roleName)) throw Error('User must have a valid roleName')

    return Object.freeze({
      get id() { return id },
      get roleName() { return roleName },
      get roleId() { return roleId },
      get email() { return email },
      get fullName() { return fullName },
      get passwordHash() { return passwordHash },
      get createdAt() { return createdAt },
      get isAdmin() { return roleName === USER_ROLES.admin },

      verify() {
        isVerified = true
      },
    })
  }
}
