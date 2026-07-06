// Trivia Quiz Game - Express Server with Router

const express = require('express');
const path = require('path');
const app = express();
const quizRouter = require('./routes/quizRouter');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/quiz', quizRouter);

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Trivia Quiz API is running'
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

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`\n🧠 Trivia Quiz Server running on http://localhost:${PORT}`);
  console.log(`\nAPI Endpoints:`);
  console.log(`  GET /quiz - Start a new quiz`);
  console.log(`  POST /quiz - Submit an answer`);
  console.log(`  GET /quiz/score - View final score`);
  console.log(`  GET /quiz/status - Check quiz status`);
  console.log(`  DELETE /quiz - End quiz session\n`);
});
