import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
  username: string
  email: string
}

function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchUsers() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        )
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        const data: User[] = await response.json()
        if (!cancelled) {
          setUsers(data)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchUsers()

    return () => {
      cancelled = true
    }
  }, [])

  if (loading) {
    return (
      <div className="card">
        <p>Loading users...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="card">
        <p>Error loading users: {error}</p>
      </div>
    )
  }

  return (
    <div className="card">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.username}) — {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
