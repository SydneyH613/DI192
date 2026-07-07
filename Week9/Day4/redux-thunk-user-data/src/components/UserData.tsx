import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchUser } from '../features/user/userSlice'

function UserData() {
  const dispatch = useAppDispatch()
  const { data: user, status, error } = useAppSelector((state) => state.user)

  return (
    <div className="user-data">
      <div className="actions">
        <button type="button" onClick={() => dispatch(fetchUser(1))}>
          Fetch User
        </button>
        <button type="button" onClick={() => dispatch(fetchUser(9999))}>
          Fetch Invalid User
        </button>
      </div>

      {status === 'loading' && <p>Loading...</p>}

      {status === 'failed' && <p className="error">Error: {error}</p>}

      {status === 'succeeded' && user && (
        <div className="card">
          <h2>{user.name}</h2>
          <p>@{user.username}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.company.name}</p>
        </div>
      )}

      {status === 'idle' && <p>Click a button to fetch a user.</p>}
    </div>
  )
}

export default UserData
