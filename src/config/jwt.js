export const jwtConfig = {
  // jsonwebtoken secret key encryption
  JWT_SECRET: 'some-strong-secret',
  // Number of minutes after which an access token expires
  JWT_ACCESS_EXPIRATION_MINUTES: 30,
  // Number of days after which a refresh token expires
  JWT_REFRESH_EXPIRATION_DAYS: 30,
  // Number of minutes after which a reset password token expires
  JWT_RESET_PASSWORD_EXPIRATION_MINUTES: 10,
  // Number of minutes after which a verify email token expires
  JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: 10,
}

export const tokenTypes = {
  ACCESS: 'access',
  REFRESH: 'refresh',
  RESET_PASSWORD: 'resetPassword',
  VERIFY_EMAIL: 'verifyEmail'
}
