export const admin_ability = [{ action: 'manage', subject: 'all' }]

export const installer_ability = [
  { action: 'read', subject: 'home' },
  { action: 'read', subject: 'second-page' }
]

export const operator_ability = [
  { action: 'read', subject: 'users-management' },
  { action: 'read', subject: 'home' },
  { action: 'read', subject: 'second-page' }
]

export const owner_ability = [
  { action: 'read', subject: 'home' },
  { action: 'read', subject: 'second-page' }
]

export default { admin_ability, installer_ability, operator_ability, owner_ability }