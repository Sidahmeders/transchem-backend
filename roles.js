export const admin_ability = [{ action: 'manage', subject: 'all' }]

export const installer_ability = [
  { action: 'read', subject: 'installer' },
  { action: 'read', subject: 'shared' }
]

export const operator_ability = [
  { action: 'read', subject: 'operator' },
  { action: 'read', subject: 'shared' }
]

export const owner_ability = [
  { action: 'read', subject: 'owner' }
]
