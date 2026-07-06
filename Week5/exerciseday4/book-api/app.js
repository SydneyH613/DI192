// Exercise 2: Building a Basic CRUD API with Express.js
// This API manages a collection of books with Create, Read, Update operations

const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Data array with sample books
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
  { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', publishedYear: 1813 }
];

let nextId = 5;

// GET /api/books - Read all books
app.get('/api/books', (req, res) => {
  console.log('GET /api/books - Returning all books');
  res.status(200).json({
    success: true,
    data: books,
    count: books.length
  });
});

// GET /api/books/:bookId - Read a specific book
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  
  if (!book) {
    console.log(`GET /api/books/:bookId - Book with id ${bookId} not found`);
    return res.status(404).json({
      success: false,
      message: 'Book not found'
    });
  }
  
  console.log(`GET /api/books/:bookId - Found book with id ${bookId}`);
  res.status(200).json({
    success: true,
    data: book
  });
});

// POST /api/books - Create a new book
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  
  // Validate required fields
  if (!title || !author || !publishedYear) {
    console.log('POST /api/books - Missing required fields');
    return res.status(400).json({
      success: false,
      message: 'Title, author, and publishedYear are required'
    });
  }
  
  const newBook = {
    id: nextId++,
    title,
    author,
    publishedYear
  };
  
  books.push(newBook);
  console.log(`POST /api/books - New book created with id ${newBook.id}`);
  
  res.status(201).json({
    success: true,
    message: 'Book created successfully',
    data: newBook
  });
});

// PUT /api/books/:bookId - Update a book
app.put('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  
  if (!book) {
    console.log(`PUT /api/books/:bookId - Book with id ${bookId} not found`);
    return res.status(404).json({
      success: false,
      message: 'Book not found'
    });
  }
  
  const { title, author, publishedYear } = req.body;
  
  if (title) book.title = title;
  if (author) book.author = author;
  if (publishedYear) book.publishedYear = publishedYear;
  
  console.log(`PUT /api/books/:bookId - Book with id ${bookId} updated`);
  
  res.status(200).json({
    success: true,
    message: 'Book updated successfully',
    data: book
  });
});

// DELETE /api/books/:bookId - Delete a book
app.delete('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    console.log(`DELETE /api/books/:bookId - Book with id ${bookId} not found`);
    return res.status(404).json({
      success: false,
      message: 'Book not found'
    });
  }
  
  const deletedBook = books.splice(bookIndex, 1);
  console.log(`DELETE /api/books/:bookId - Book with id ${bookId} deleted`);
  
  res.status(200).json({
    success: true,
    message: 'Book deleted successfully',
    data: deletedBook[0]
  });
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`\n📚 Book API Server is running on http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  GET /api/books - Get all books`);
  console.log(`  GET /api/books/:bookId - Get a specific book`);
  console.log(`  POST /api/books - Create a new book`);
  console.log(`  PUT /api/books/:bookId - Update a book`);
  console.log(`  DELETE /api/books/:bookId - Delete a book\n`);
});
