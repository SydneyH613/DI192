const express = require('express')
const authenticateToken = require('../middleware/authenticateToken')

const router = express.Router()

router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}!`, user: req.user })
})

router.get('/verify', authenticateToken, (req, res) => {
  res.status(200).json({ authenticated: true, user: req.user })
})

module.exports = router
