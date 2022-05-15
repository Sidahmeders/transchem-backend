const unAuthorizedError = { err: 'not Authorized, please Login Or Register' }

export default function makeCheckAuthorization({ verifyAccessToken, verifyRefreshToken, generateAuthTokens }) {
  return async function checkAuthorization(req, res, next) {
    const { accessToken, refreshToken } = req.cookies
    if (!accessToken && !refreshToken) return res.status(401).json(unAuthorizedError)
    try {
      if (!accessToken && refreshToken) {
        const blacklistedToken = await verifyRefreshToken(refreshToken)
        if (blacklistedToken === null) return res.status(401).json(unAuthorizedError)
        
        const authTokens = await generateAuthTokens(blacklistedToken.id)
        const { access, refresh } = authTokens
        const accessAge = Date.parse(access.expires) - Date.now()
        const refreshAge = Date.parse(refresh.expires) - Date.now()
        res.cookie("accessToken", access.token, { httpOnly: true, maxAge: accessAge })
        res.cookie("refreshToken", refresh.token, { httpOnly: true, maxAge: refreshAge })
        
        next()
      } else {
        await verifyAccessToken(accessToken)
        next()
      }
    } catch(err) {
      console.log(err)
      res.status(401).json({ err: err.message })
    }
  }
}