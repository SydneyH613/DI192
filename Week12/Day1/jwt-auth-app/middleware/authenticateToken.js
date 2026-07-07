const jwt = require('jsonwebtoken')
const { ACCESS_TOKEN_SECRET } = require('../utils/tokens')

function authenticateToken(req, res, next) {
  const token = req.cookies?.accessToken

  if (!token) {
    return res.status(401).json({ message: 'Access token missing' })
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ message: 'Invalid or expired access token' })
    }
    req.user = decoded
    next()
  })
}

module.exports = authenticateToken
