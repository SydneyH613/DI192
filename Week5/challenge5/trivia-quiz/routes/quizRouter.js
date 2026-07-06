// Quiz Router - Using express.Router for quiz endpoints

const express = require('express');
const router = express.Router();
const trivia = require('../models/trivia');

// Store active quiz sessions
const quizSessions = {};

// Generate session ID
function generateSessionId() {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// GET /quiz - Start the quiz and display the first question
router.get('/', (req, res) => {
  // Create a new quiz session
  const sessionId = generateSessionId();
  
  // Initialize session
  quizSessions[sessionId] = {
    currentQuestion: 1,
    score: 0,
    totalQuestions: trivia.getTotalQuestions(),
    answers: [],
    startTime: new Date()
  };
  
  // Get the first question
  const firstQuestion = trivia.getQuestion(1);
  
  res.json({
    success: true,
    sessionId: sessionId,
    message: 'Quiz started!',
    totalQuestions: trivia.getTotalQuestions(),
    question: {
      id: firstQuestion.id,
      question: firstQuestion.question,
      options: firstQuestion.options,
      difficulty: firstQuestion.difficulty
    },
    progress: {
      current: 1,
      total: trivia.getTotalQuestions()
    }
  });
});

// POST /quiz - Submit an answer and move to the next question
router.post('/', (req, res) => {
  const { sessionId, answer } = req.body;
  
  if (!sessionId || answer === undefined) {
    return res.status(400).json({
      success: false,
      message: 'Missing sessionId or answer'
    });
  }
  
  const session = quizSessions[sessionId];
  
  if (!session) {
    return res.status(404).json({
      success: false,
      message: 'Quiz session not found. Please start a new quiz.'
    });
  }
  
  // Get current question
  const currentQuestion = trivia.getQuestion(session.currentQuestion);
  
  // Check if answer is correct
  const isCorrect = answer.toLowerCase() === currentQuestion.answer.toLowerCase();
  
  if (isCorrect) {
    session.score++;
  }
  
  // Store the answer
  session.answers.push({
    questionId: session.currentQuestion,
    question: currentQuestion.question,
    userAnswer: answer,
    correctAnswer: currentQuestion.answer,
    isCorrect: isCorrect
  });
  
  // Prepare response
  const response = {
    success: true,
    isCorrect: isCorrect,
    correctAnswer: currentQuestion.answer,
    feedback: isCorrect ? '✅ Correct!' : '❌ Incorrect!',
    currentScore: session.score,
    questionNumber: session.currentQuestion,
    totalQuestions: session.totalQuestions
  };
  
  // Check if there are more questions
  if (session.currentQuestion < session.totalQuestions) {
    session.currentQuestion++;
    const nextQuestion = trivia.getQuestion(session.currentQuestion);
    
    response.nextQuestion = {
      id: nextQuestion.id,
      question: nextQuestion.question,
      options: nextQuestion.options,
      difficulty: nextQuestion.difficulty
    };
    
    response.progress = {
      current: session.currentQuestion,
      total: session.totalQuestions,
      message: 'Moving to next question...'
    };
  } else {
    response.quizComplete = true;
    response.message = 'Quiz completed! Your final score will be displayed.';
  }
  
  res.json(response);
});

// GET /quiz/score - Display the user's final score
router.get('/score', (req, res) => {
  const sessionId = req.query.sessionId;
  
  if (!sessionId) {
    return res.status(400).json({
      success: false,
      message: 'Missing sessionId'
    });
  }
  
  const session = quizSessions[sessionId];
  
  if (!session) {
    return res.status(404).json({
      success: false,
      message: 'Quiz session not found'
    });
  }
  
  // Calculate percentage
  const percentage = Math.round((session.score / session.totalQuestions) * 100);
  
  // Determine performance message
  let performanceMessage = '';
  if (percentage === 100) {
    performanceMessage = '🌟 Perfect Score! You are a trivia master!';
  } else if (percentage >= 80) {
    performanceMessage = '🎉 Excellent! You did very well!';
  } else if (percentage >= 60) {
    performanceMessage = '👍 Good job! Keep practicing!';
  } else if (percentage >= 40) {
    performanceMessage = '📚 Not bad! Learn more and try again!';
  } else {
    performanceMessage = '💪 Better luck next time! Keep learning!';
  }
  
  const endTime = new Date();
  const timeTaken = Math.round((endTime - session.startTime) / 1000); // in seconds
  
  res.json({
    success: true,
    finalScore: session.score,
    totalQuestions: session.totalQuestions,
    percentage: percentage,
    performanceMessage: performanceMessage,
    timeTaken: timeTaken,
    answers: session.answers,
    scoreBreakdown: {
      correct: session.score,
      incorrect: session.totalQuestions - session.score
    }
  });
});

// GET /quiz/status - Check current quiz status
router.get('/status', (req, res) => {
  const sessionId = req.query.sessionId;
  
  if (!sessionId) {
    return res.status(400).json({
      success: false,
      message: 'Missing sessionId'
    });
  }
  
  const session = quizSessions[sessionId];
  
  if (!session) {
    return res.status(404).json({
      success: false,
      message: 'Quiz session not found'
    });
  }
  
  res.json({
    success: true,
    currentQuestion: session.currentQuestion,
    totalQuestions: session.totalQuestions,
    score: session.score,
    progress: Math.round((session.currentQuestion / session.totalQuestions) * 100)
  });
});

// DELETE /quiz - End quiz session
router.delete('/', (req, res) => {
  const { sessionId } = req.body;
  
  if (!sessionId) {
    return res.status(400).json({
      success: false,
      message: 'Missing sessionId'
    });
  }
  
  if (quizSessions[sessionId]) {
    delete quizSessions[sessionId];
    res.json({
      success: true,
      message: 'Quiz session ended'
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Quiz session not found'
    });
  }
});

module.exports = router;
