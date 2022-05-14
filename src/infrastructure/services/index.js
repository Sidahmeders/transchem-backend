import MomentJs from '../lib/moment.js'
import { tokensDB } from '../store/index.js'
import { verifyJwt, issueJwt } from '../utils.js'
import { jwtConfig, tokenTypes } from '../../config/jwt.js'

import makeVerifyToken from './token/verifyToken.js'
import makeGenerateAuthTokens from './token/generateAuthTokens.js'
import makeGenerateResetPasswordToken from './token/generateResetPasswordToken.js'
import makeGenerateVerifyEmailToken from './token/generateVerifyEmailToken.js'

const verifyToken = makeVerifyToken({ verifyJwt, jwtConfig, tokensDB })
const generateAuthTokens = makeGenerateAuthTokens({ MomentJs, tokensDB, jwtConfig, issueJwt, tokenTypes })
const generateResetPasswordToken = makeGenerateResetPasswordToken({ MomentJs, tokensDB, jwtConfig, issueJwt, tokenTypes })
const generateVerifyEmailToken = makeGenerateVerifyEmailToken({ MomentJs, tokensDB, jwtConfig, issueJwt, tokenTypes })

export {
  verifyToken,
  generateAuthTokens,
  generateResetPasswordToken,
  generateVerifyEmailToken
}