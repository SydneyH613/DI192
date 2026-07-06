const express = require('express');
const booksRouter = require('./routes/books');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Mount the books router
app.use('/books', booksRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
