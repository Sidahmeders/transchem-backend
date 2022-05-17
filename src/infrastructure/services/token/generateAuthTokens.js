/**
 * Generate auth tokens
 * @param {string} userId
 * @returns {Promise<Object>}
 */
export default function makeGenerateAuthTokens({ MomentJs, makeToken, tokensDB, jwtConfig, issueJwt, tokenTypes }) {
  return async function generateAuthTokens(userId) {
    const accessTokenExpires = MomentJs.add(jwtConfig.JWT_ACCESS_EXPIRATION_MINUTES, 'minute')
    const accessToken = issueJwt(userId, accessTokenExpires, tokenTypes.ACCESS, jwtConfig.JWT_SECRET)

    const refreshTokenExpires = MomentJs.add(jwtConfig.JWT_REFRESH_EXPIRATION_DAYS, 'day')
    const refreshToken = issueJwt(userId, refreshTokenExpires, tokenTypes.REFRESH, jwtConfig.JWT_SECRET)
    
    const newTokenDoc = makeToken({
      token: refreshToken,
      userId,
      expires: refreshTokenExpires,
      type: tokenTypes.REFRESH
    })
    await tokensDB.addToken(newTokenDoc)
    
    return {
      access: {
        token: accessToken,
        expiry: (Date.parse(accessTokenExpires) - Date.now()) / 1000
      },
      refresh: {
        token: refreshToken,
        expiry: (Date.parse(refreshTokenExpires) - Date.now()) / 1000
      },
    }
  }
}