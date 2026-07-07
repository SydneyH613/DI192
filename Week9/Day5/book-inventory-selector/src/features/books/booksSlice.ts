import { createSlice, createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface Book {
  id: number
  title: string
  author: string
  genre: 'Horror' | 'Fantasy' | 'Science Fiction'
}

const initialState: Book[] = [
  { id: 1, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
  { id: 2, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
  { id: 3, title: 'It', author: 'Stephen King', genre: 'Horror' },
  {
    id: 4,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
  },
  {
    id: 5,
    title: "A Game of Thrones",
    author: 'George R.R. Martin',
    genre: 'Fantasy',
  },
  {
    id: 6,
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    genre: 'Fantasy',
  },
  { id: 7, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
  {
    id: 8,
    title: "Ender's Game",
    author: 'Orson Scott Card',
    genre: 'Science Fiction',
  },
  {
    id: 9,
    title: 'Foundation',
    author: 'Isaac Asimov',
    genre: 'Science Fiction',
  },
]

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
})

export default booksSlice.reducer

export const selectBooks = (state: RootState) => state.books

export const selectHorrorBooks = createSelector(selectBooks, (books) =>
  books.filter((book) => book.genre === 'Horror'),
)

export const selectFantasyBooks = createSelector(selectBooks, (books) =>
  books.filter((book) => book.genre === 'Fantasy'),
)

export const selectScienceFictionBooks = createSelector(
  selectBooks,
  (books) => books.filter((book) => book.genre === 'Science Fiction'),
)
