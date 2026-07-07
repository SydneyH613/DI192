import { useState } from 'react'

type Action = 'increment' | 'decrement' | null

function Counter() {
  const [count, setCount] = useState<number>(0)
  const [lastAction, setLastAction] = useState<Action>(null)

  const handleIncrement = () => {
    setCount((current) => current + 1)
    setLastAction('increment')
  }

  const handleDecrement = () => {
    setCount((current) => current - 1)
    setLastAction('decrement')
  }

  return (
    <div className="card">
      <h2>Counter: {count}</h2>
      <div className="counter-buttons">
        <button type="button" onClick={handleDecrement}>
          -
        </button>
        <button type="button" onClick={handleIncrement}>
          +
        </button>
      </div>
      <p>Last action: {lastAction ?? 'none'}</p>
    </div>
  )
}

export default Counter
