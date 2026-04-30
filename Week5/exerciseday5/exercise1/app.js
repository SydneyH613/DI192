const express = require('express');
const router = require('./routes/index');

const app = express();
const PORT = 3000;

// Mount the router
app.use('/', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
