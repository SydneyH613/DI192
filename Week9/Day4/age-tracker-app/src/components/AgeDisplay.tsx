import { useAppSelector } from '../app/hooks'

function AgeDisplay() {
  const { age, loading } = useAppSelector((state) => state.age)

  return (
    <div className="age-display">
      <span className="age-value">{age}</span>
      {loading && <span className="spinner" aria-label="Loading" />}
    </div>
  )
}

export default AgeDisplay
