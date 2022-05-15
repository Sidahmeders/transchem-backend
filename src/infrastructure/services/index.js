import MomentJs from '../lib/moment.js'
import { tokensDB } from '../store/index.js'
import { makeToken } from '../../domain/entities/index.js'
import { verifyJwt, issueJwt } from '../utils.js'
import { jwtConfig, tokenTypes } from '../../config/jwt.js'

import makeVerifyAccessToken from './token/verifyAccessToken.js'
import makeVerifyRefreshToken from './token/verifyRefreshToken.js'
import makeGenerateAuthTokens from './token/generateAuthTokens.js'
import makeGenerateResetPasswordToken from './token/generateResetPasswordToken.js'
import makeGenerateVerifyEmailToken from './token/generateVerifyEmailToken.js'

const verifyAccessToken = makeVerifyAccessToken({ jwtConfig, verifyJwt })
const verifyRefreshToken = makeVerifyRefreshToken({ tokensDB, jwtConfig, verifyJwt })
const generateAuthTokens = makeGenerateAuthTokens({ MomentJs, makeToken, tokensDB, jwtConfig, issueJwt, tokenTypes })
const generateResetPasswordToken = makeGenerateResetPasswordToken({ MomentJs, makeToken, tokensDB, jwtConfig, issueJwt, tokenTypes })
const generateVerifyEmailToken = makeGenerateVerifyEmailToken({ MomentJs, makeToken, tokensDB, jwtConfig, issueJwt, tokenTypes })

export {
  verifyAccessToken,
  verifyRefreshToken,
  generateAuthTokens,
  generateResetPasswordToken,
  generateVerifyEmailToken
}