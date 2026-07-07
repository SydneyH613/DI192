import { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from '../features/books/booksSlice'

type Genre = 'All' | 'Horror' | 'Fantasy' | 'Science Fiction'

const GENRES: Genre[] = ['All', 'Horror', 'Fantasy', 'Science Fiction']

function BookList() {
  const [genre, setGenre] = useState<Genre>('All')

  const allBooks = useAppSelector(selectBooks)
  const horrorBooks = useAppSelector(selectHorrorBooks)
  const fantasyBooks = useAppSelector(selectFantasyBooks)
  const scienceFictionBooks = useAppSelector(selectScienceFictionBooks)

  const booksByGenre: Record<Genre, typeof allBooks> = {
    All: allBooks,
    Horror: horrorBooks,
    Fantasy: fantasyBooks,
    'Science Fiction': scienceFictionBooks,
  }

  const books = booksByGenre[genre]

  return (
    <div className="book-list">
      <div className="genre-tabs">
        {GENRES.map((g) => (
          <button
            key={g}
            type="button"
            className={g === genre ? 'active' : ''}
            onClick={() => setGenre(g)}
          >
            {g}
          </button>
        ))}
      </div>

      <ul>
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <strong>{book.title}</strong>
            <span> by {book.author}</span>
            <span className="genre-tag">{book.genre}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
