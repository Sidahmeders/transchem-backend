const unAuthorizedError = { err: 'not Authorized, please Login Or Register' }

export default function makeCheckAuthorization({ verifyAccessToken, verifyRefreshToken, generateAuthTokens }) {
  return async function checkAuthorization(req, res) {
    const { accessToken, refreshToken } = req.cookies
    if (!accessToken && !refreshToken) return res.code(401).send(unAuthorizedError)
    try {
      if (!accessToken && refreshToken) {
        const blacklistedToken = await verifyRefreshToken(refreshToken)
        if (blacklistedToken === null) return res.code(401).send(unAuthorizedError)
        
        const authTokens = await generateAuthTokens(blacklistedToken.id)
        const { access, refresh } = authTokens

        res.cookie("accessToken", access.token, { path: '/', httpOnly: true, maxAge: access.expiry })
        res.cookie("refreshToken", refresh.token, { path: '/', httpOnly: true, maxAge: refresh.expiry })
      } else {
        verifyAccessToken(accessToken)
      }
    } catch(err) {
      console.log(err)
      res.code(401).send({ err: err.message })
    }
  }
}