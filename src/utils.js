export const getUniqueId = () => `id::${Date.now()}::${Math.floor(Math.random() * 99999)}`

export const buildImages = (count) => new Array(count).fill('https://pbs.twimg.com/profile_images/598503127629762562/iFySk-lp_400x400.jpg')

export const buildPermissions = (permissions) => JSON.parse(JSON.stringify(permissions)).map((permission) => {
  const newActions = Object.keys(permission.actions).reduce((prev, curr) => ({...prev, [curr]: Boolean(Math.round(Math.random() * 1))}), {})  
  return Object.assign(permission, { actions: newActions })
})
