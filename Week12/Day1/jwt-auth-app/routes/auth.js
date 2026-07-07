const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { findUserByUsername, createUser } = require('../data/users')
const {
  addRefreshToken,
  removeRefreshToken,
  isRefreshTokenValid,
} = require('../data/refreshTokens')
const {
  generateAccessToken,
  generateRefreshToken,
  REFRESH_TOKEN_SECRET,
} = require('../utils/tokens')

const router = express.Router()

const SALT_ROUNDS = 10
const ACCESS_TOKEN_MAX_AGE = 60 * 60 * 1000
const REFRESH_TOKEN_MAX_AGE = 7 * 24 * 60 * 60 * 1000

function setAuthCookies(res, accessToken, refreshToken) {
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    maxAge: ACCESS_TOKEN_MAX_AGE,
  })
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: REFRESH_TOKEN_MAX_AGE,
  })
}

router.post('/register', async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' })
  }

  if (findUserByUsername(username)) {
    return res.status(409).json({ message: 'Username already taken' })
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)
  const user = createUser({ username, passwordHash })

  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)
  addRefreshToken(refreshToken)

  setAuthCookies(res, accessToken, refreshToken)
  res.status(201).json({ message: 'User registered successfully' })
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' })
  }

  const user = findUserByUsername(username)
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' })
  }

  const passwordMatches = await bcrypt.compare(password, user.passwordHash)
  if (!passwordMatches) {
    return res.status(401).json({ message: 'Invalid username or password' })
  }

  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)
  addRefreshToken(refreshToken)

  setAuthCookies(res, accessToken, refreshToken)
  res.json({ message: 'Login successful' })
})

router.post('/refresh', (req, res) => {
  const token = req.cookies?.refreshToken

  if (!token || !isRefreshTokenValid(token)) {
    return res
      .status(401)
      .json({ message: 'Refresh token missing or invalid' })
  }

  jwt.verify(token, REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      removeRefreshToken(token)
      return res
        .status(403)
        .json({ message: 'Invalid or expired refresh token' })
    }

    const accessToken = generateAccessToken({
      id: decoded.id,
      username: decoded.username,
    })
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: ACCESS_TOKEN_MAX_AGE,
    })
    res.json({ message: 'Access token refreshed' })
  })
})

router.post('/logout', (req, res) => {
  const token = req.cookies?.refreshToken
  if (token) {
    removeRefreshToken(token)
  }
  res.clearCookie('accessToken')
  res.clearCookie('refreshToken')
  res.json({ message: 'Logged out successfully' })
})

module.exports = router
