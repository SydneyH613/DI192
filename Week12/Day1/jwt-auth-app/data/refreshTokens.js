const validRefreshTokens = new Set()

function addRefreshToken(token) {
  validRefreshTokens.add(token)
}

function removeRefreshToken(token) {
  validRefreshTokens.delete(token)
}

function isRefreshTokenValid(token) {
  return validRefreshTokens.has(token)
}

module.exports = { addRefreshToken, removeRefreshToken, isRefreshTokenValid }
