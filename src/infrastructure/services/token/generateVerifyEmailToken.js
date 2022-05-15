/**
 * Generate verify email token
 * @param {User} user
 * @returns {Promise<string>}
 */
export default function makeGenerateVerifyEmailToken({ MomentJs, makeToken, tokensDB, jwtConfig, issueJwt, tokenTypes }) {
  return async function generateVerifyEmailToken(user) {
    const expires = MomentJs.add(jwtConfig.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES, 'minute')
    const verifyEmailToken = issueJwt(user.id, expires, tokenTypes.VERIFY_EMAIL, jwtConfig.JWT_SECRET)
    const newTokenDoc = makeToken({
      token: verifyEmailToken,
      userId: user.id,
      expires,
      type: tokenTypes.VERIFY_EMAIL
    })
    await tokensDB.addToken(newTokenDoc)
    return verifyEmailToken
  }
}