/**
 * @param {string} token
 * @param {string} type
 * @returns {Promise<payload | string>}
 */
export default function makeVerifyAccessToken({ jwtConfig, verifyJwt }) {
  return async function verifyAccessToken(token) {
    const payload = verifyJwt(token, jwtConfig.JWT_SECRET)
    return payload
  }
}