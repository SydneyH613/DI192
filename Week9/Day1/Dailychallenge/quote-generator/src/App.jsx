import { useState } from 'react'
import quotes from './quotes.json'
import './App.css'

function randomIndex(exclude, length) {
  if (length === 1) return 0
  let index
  do {
    index = Math.floor(Math.random() * length)
  } while (index === exclude)
  return index
}

function randomColor() {
  const hue = Math.floor(Math.random() * 360)
  const saturation = 60 + Math.floor(Math.random() * 30)
  const lightness = 40 + Math.floor(Math.random() * 30)
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

function App() {
  const [quoteIndex, setQuoteIndex] = useState(() =>
    Math.floor(Math.random() * quotes.length)
  )
  const [colors, setColors] = useState(() => ({
    background: randomColor(),
    header: randomColor(),
    button: randomColor(),
  }))

  const handleNewQuote = () => {
    setQuoteIndex((current) => randomIndex(current, quotes.length))
    setColors({
      background: randomColor(),
      header: randomColor(),
      button: randomColor(),
    })
  }

  const { quote, author } = quotes[quoteIndex]

  return (
    <div className="app" style={{ backgroundColor: colors.background }}>
      <div className="quote-box">
        <h1 style={{ color: colors.header }}>&ldquo;{quote}&rdquo;</h1>
        <p className="author">— {author}</p>
        <button
          style={{ backgroundColor: colors.button }}
          onClick={handleNewQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  )
}

export default App
