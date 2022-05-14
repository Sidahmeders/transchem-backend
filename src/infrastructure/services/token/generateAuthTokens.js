/**
 * Generate auth tokens
 * @param {User} user
 * @returns {Promise<Object>}
 */
export default function makeGenerateAuthTokens({ MomentJs, tokensDB, jwtConfig, issueJwt, tokenTypes }) {
  return async function generateAuthTokens(user) {
    const accessTokenExpires = MomentJs.add(jwtConfig.JWT_ACCESS_EXPIRATION_MINUTES, 'minute')
    const accessToken = issueJwt(user.id, accessTokenExpires, tokenTypes.ACCESS, jwtConfig.JWT_SECRET)

    const refreshTokenExpires = MomentJs.add(jwtConfig.JWT_REFRESH_EXPIRATION_DAYS, 'day')
    const refreshToken = issueJwt(user.id, refreshTokenExpires, tokenTypes.REFRESH, jwtConfig.JWT_SECRET)
    await tokensDB.addToken(refreshToken, user.id, refreshTokenExpires, tokenTypes.REFRESH)

    return {
      access: {
        token: accessToken,
        expires: accessTokenExpires,
      },
      refresh: {
        token: refreshToken,
        expires: refreshTokenExpires,
      },
    }
  }
}