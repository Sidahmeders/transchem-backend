/**
 * Generate reset password token
 * @param {string} email
 * @returns {Promise<string>}
 */
export default function makeGenerateResetPasswordToken({ MomentJs, tokensDB, jwtConfig, issueJwt, tokenTypes }) {
  return async function generateResetPasswordToken(user) {
    const expires = MomentJs.add(jwtConfig.JWT_RESET_PASSWORD_EXPIRATION_MINUTES, 'minute')
    const resetPasswordToken = issueJwt(user.id, expires, tokenTypes.RESET_PASSWORD, jwtConfig.JWT_SECRET)
    await tokensDB.addToken(resetPasswordToken, user.id, expires, tokenTypes.RESET_PASSWORD)
    return resetPasswordToken
  }
}