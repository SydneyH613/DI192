import { useAppDispatch, useAppSelector } from '../app/hooks'
import { ageUpAsync, ageDownAsync } from '../features/age/ageSlice'

function AgeControls() {
  const dispatch = useAppDispatch()
  const loading = useAppSelector((state) => state.age.loading)

  return (
    <form className="age-controls" onSubmit={(e) => e.preventDefault()}>
      <button
        type="button"
        disabled={loading}
        onClick={() => dispatch(ageDownAsync())}
      >
        Age Down
      </button>
      <button
        type="button"
        disabled={loading}
        onClick={() => dispatch(ageUpAsync())}
      >
        Age Up
      </button>
    </form>
  )
}

export default AgeControls
