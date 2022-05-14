import makeCheckAuthorization from './checkAuthorization.js'

const { default: { verifyToken } } = await import('../../infrastructure/services/index.js')

const checkAuthorization = makeCheckAuthorization({ verifyToken })

export { checkAuthorization }