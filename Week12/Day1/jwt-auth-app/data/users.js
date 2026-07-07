const users = []

let nextId = 1

function findUserByUsername(username) {
  return users.find((user) => user.username === username)
}

function createUser({ username, passwordHash }) {
  const user = { id: nextId++, username, passwordHash }
  users.push(user)
  return user
}

module.exports = { users, findUserByUsername, createUser }
