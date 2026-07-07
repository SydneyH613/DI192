import { useState } from 'react'
import './App.css'

const OPERATIONS = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
}

function App() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')
  const [operation, setOperation] = useState('add')
  const [result, setResult] = useState(null)

  const handleCalculate = () => {
    const a = Number(firstNumber)
    const b = Number(secondNumber)
    setResult(OPERATIONS[operation](a, b))
  }

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="inputs">
        <input
          type="number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
          placeholder="First number"
        />
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">+</option>
          <option value="subtract">−</option>
          <option value="multiply">×</option>
          <option value="divide">÷</option>
        </select>
        <input
          type="number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
          placeholder="Second number"
        />
      </div>
      <button onClick={handleCalculate}>Add Them</button>
      {result !== null && (
        <p className="result">
          Result: <span>{result}</span>
        </p>
      )}
    </div>
  )
}

export default App
