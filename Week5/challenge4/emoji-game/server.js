// Emoji Guessing Game - Express Server
// A fun game where players guess emoji names with instant feedback and leaderboard

const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Emoji database
const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '🎮', name: 'Game' },
  { emoji: '🚀', name: 'Rocket' },
  { emoji: '⚽', name: 'Soccer' },
  { emoji: '🎸', name: 'Guitar' },
  { emoji: '🌟', name: 'Star' },
  { emoji: '❤️', name: 'Heart' },
  { emoji: '🎉', name: 'Party' },
  { emoji: '👻', name: 'Ghost' },
  { emoji: '🐱', name: 'Cat' },
  { emoji: '🦁', name: 'Lion' },
  { emoji: '🌈', name: 'Rainbow' },
  { emoji: '🍎', name: 'Apple' },
  { emoji: '🎓', name: 'Graduation' },
  { emoji: '💻', name: 'Computer' },
  { emoji: '📚', name: 'Books' },
  { emoji: '🏠', name: 'House' }
];

// In-memory leaderboard (in production, use a database)
let leaderboard = [];

// Track current game session data
let gameSessions = {};

// Helper function to get random emoji with options
function getRandomEmojiQuestion() {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  
  // Get 3 incorrect options as distractors
  const incorrectOptions = [];
  const availableEmojis = emojis.filter(e => e.name !== randomEmoji.name);
  
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * availableEmojis.length);
    incorrectOptions.push(availableEmojis[randomIndex].name);
    availableEmojis.splice(randomIndex, 1);
  }
  
  // Combine correct answer with distractors and shuffle
  const options = [randomEmoji.name, ...incorrectOptions];
  const shuffledOptions = options.sort(() => Math.random() - 0.5);
  
  return {
    emoji: randomEmoji.emoji,
    correctAnswer: randomEmoji.name,
    options: shuffledOptions
  };
}

// Routes

// GET / - Serve the game page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET /api/question - Get a new emoji question
app.get('/api/question', (req, res) => {
  const question = getRandomEmojiQuestion();
  res.json({
    success: true,
    data: question
  });
});

// POST /api/guess - Submit a guess
app.post('/api/guess', (req, res) => {
  const { guess, sessionId } = req.body;
  
  if (!guess || !sessionId) {
    return res.status(400).json({
      success: false,
      message: 'Missing guess or session ID'
    });
  }
  
  // Initialize session if it doesn't exist
  if (!gameSessions[sessionId]) {
    gameSessions[sessionId] = { score: 0, totalGuesses: 0 };
  }
  
  // Get the current question (in a real app, you'd store this)
  const question = getRandomEmojiQuestion();
  const isCorrect = guess === question.correctAnswer;
  
  if (isCorrect) {
    gameSessions[sessionId].score++;
  }
  
  gameSessions[sessionId].totalGuesses++;
  
  res.json({
    success: true,
    isCorrect: isCorrect,
    correctAnswer: question.correctAnswer,
    score: gameSessions[sessionId].score,
    totalGuesses: gameSessions[sessionId].totalGuesses,
    message: isCorrect ? '🎉 Correct!' : '❌ Wrong!',
    nextQuestion: getRandomEmojiQuestion()
  });
});

// POST /api/end-game - End game and save score to leaderboard
app.post('/api/end-game', (req, res) => {
  const { playerName, sessionId } = req.body;
  
  if (!playerName || !sessionId) {
    return res.status(400).json({
      success: false,
      message: 'Missing player name or session ID'
    });
  }
  
  const session = gameSessions[sessionId];
  if (!session) {
    return res.status(404).json({
      success: false,
      message: 'Game session not found'
    });
  }
  
  // Create leaderboard entry
  const entry = {
    playerName,
    score: session.score,
    totalGuesses: session.totalGuesses,
    accuracy: Math.round((session.score / session.totalGuesses) * 100),
    timestamp: new Date()
  };
  
  leaderboard.push(entry);
  
  // Sort leaderboard by score (descending) and keep top 10
  leaderboard.sort((a, b) => b.score - a.score || b.accuracy - a.accuracy);
  leaderboard = leaderboard.slice(0, 10);
  
  // Clean up session
  delete gameSessions[sessionId];
  
  res.json({
    success: true,
    message: 'Game saved to leaderboard',
    finalEntry: entry
  });
});

// GET /api/leaderboard - Get the top scores
app.get('/api/leaderboard', (req, res) => {
  res.json({
    success: true,
    leaderboard: leaderboard.map((entry, index) => ({
      rank: index + 1,
      playerName: entry.playerName,
      score: entry.score,
      totalGuesses: entry.totalGuesses,
      accuracy: entry.accuracy,
      date: entry.timestamp.toLocaleDateString()
    }))
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Emoji Game API is running'
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
  console.log(`\n🎮 Emoji Guessing Game Server running on http://localhost:${PORT}`);
  console.log(`\nAPI Endpoints:`);
  console.log(`  GET /api/question - Get a new emoji question`);
  console.log(`  POST /api/guess - Submit your guess`);
  console.log(`  POST /api/end-game - End game and save score`);
  console.log(`  GET /api/leaderboard - View top scores\n`);
});
