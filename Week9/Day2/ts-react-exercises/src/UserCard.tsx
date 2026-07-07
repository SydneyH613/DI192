interface UserCardProps {
  name?: string
  age?: number
  role?: string
}

function UserCard({
  name = 'Anonymous',
  age = 0,
  role = 'Guest',
}: UserCardProps) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  )
}

export default UserCard
