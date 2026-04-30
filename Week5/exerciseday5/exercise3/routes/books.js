const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
const books = [];
let nextId = 1;

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author, isbn, year } = req.body;
  
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }
  
  const newBook = {
    id: nextId++,
    title,
    author,
    isbn: isbn || '',
    year: year || new Date().getFullYear()
  };
  
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, author, isbn, year } = req.body;
  
  const book = books.find(b => b.id === parseInt(id));
  
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  
  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;
  if (isbn !== undefined) book.isbn = isbn;
  if (year !== undefined) book.year = year;
  
  res.json(book);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(b => b.id === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  
  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
});

module.exports = router;
