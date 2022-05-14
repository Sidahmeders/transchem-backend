export default function makeCheckAuthorization({ verifyToken }) {
  return function checkAuthorization(req, res, next) {
    const { accessToken, refreshToken } = req.cookies
    if(!accessToken) {
      return res.status(401).json({ err: "not Authorized, please Login Or Register" })
    }
    
    try {
      const decodedToken = verifyToken(accessToken)
      req.decodedToken = decodedToken
      next()
    } catch(err) {
      console.log(err.message)
      res.status(401).json({ err: err.message })
    }
  }
}