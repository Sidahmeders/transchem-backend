/**
 * Generate reset password token
 * @param {string} email
 * @returns {Promise<string>}
 */
export default function makeGenerateResetPasswordToken({ MomentJs, makeToken, tokensDB, jwtConfig, issueJwt, tokenTypes }) {
  return async function generateResetPasswordToken(user) {
    const expires = MomentJs.add(jwtConfig.JWT_RESET_PASSWORD_EXPIRATION_MINUTES, 'minute')
    const resetPasswordToken = issueJwt(user.id, expires, tokenTypes.RESET_PASSWORD, jwtConfig.JWT_SECRET)
    const newTokenDoc = makeToken({
      token: resetPasswordToken,
      userId: user.id,
      expires,
      type: tokenTypes.RESET_PASSWORD
    })
    await tokensDB.addToken(newTokenDoc)
    return resetPasswordToken
  }
}