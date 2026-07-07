import { useState } from 'react'
import type { FormEvent } from 'react'
import List from './List'
import type { Book } from './types'

const initialBooks: Book[] = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: 2, title: 'Dune', author: 'Frank Herbert' },
  { id: 3, title: '1984', author: 'George Orwell' },
]

function BookApp() {
  const [books, setBooks] = useState<Book[]>(initialBooks)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const addBook = (title: string, author: string) => {
    const newBook: Book = {
      id: Date.now(),
      title,
      author,
    }
    setBooks((current) => [...current, newBook])
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!title.trim() || !author.trim()) return
    addBook(title.trim(), author.trim())
    setTitle('')
    setAuthor('')
  }

  return (
    <div className="book-app">
      <h1>Book List</h1>

      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <button type="submit">Add Book</button>
      </form>

      <List
        items={books}
        renderItem={(book) => (
          <span>
            <strong>{book.title}</strong> by {book.author}
          </span>
        )}
      />
    </div>
  )
}

export default BookApp
