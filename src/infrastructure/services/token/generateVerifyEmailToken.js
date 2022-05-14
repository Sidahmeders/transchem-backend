/**
 * Generate verify email token
 * @param {User} user
 * @returns {Promise<string>}
 */
export default function makeGenerateVerifyEmailToken({ MomentJs, tokensDB, jwtConfig, issueJwt, tokenTypes }) {
  return async function generateVerifyEmailToken(user) {
    const expires = MomentJs.add(jwtConfig.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES, 'minute')
    const verifyEmailToken = issueJwt(user.id, expires, tokenTypes.VERIFY_EMAIL, jwtConfig.JWT_SECRET)
    await tokensDB.addToken(verifyEmailToken, user.id, expires, tokenTypes.VERIFY_EMAIL)
    return verifyEmailToken
  }
}