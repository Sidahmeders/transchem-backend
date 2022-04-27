const USER_ROLES = {
  admin: 'ADMIN',
  owner: 'OWNER',
  installer: 'INSTALLER',
  operator: 'OPERATOR'
}

export default function buildMakeUser({ getUniqueId }) {
  return function makeUser({ id = getUniqueId(), email, passwordHash, displayName = '', isVerified = false, createdAt = Date.now(), role }) {
    if (!id) throw Error('User must have an id')
    if (!email) throw Error('User must have an email')
    if (!passwordHash) throw Error('User must have a passwordHash')
    if (!Object.values(USER_ROLES).includes(role)) throw Error('User must have a valid role')

    return Object.freeze({
      get id() { return id },
      get role() { return role },
      get email() { return email },
      get displayName() { return displayName },
      get description() { return description },
      get passwordHash() { return passwordHash },
      get isVerified() { return isVerified },
      get createdAt() { return createdAt },
      get isAdmin() { return role === USER_ROLES.admin },

      verify() {
        isVerified = true
      },
    })
  }
}
