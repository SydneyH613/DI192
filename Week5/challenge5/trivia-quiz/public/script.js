// Trivia Quiz Game - Client-side JavaScript

let gameState = {
    sessionId: null,
    currentQuestion: 1,
    score: 0,
    totalQuestions: 10,
    answers: [],
    isAnswered: false
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    document.getElementById('startBtn').addEventListener('click', startQuiz);
    document.getElementById('quizForm').addEventListener('submit', submitAnswer);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('restartBtn').addEventListener('click', restartQuiz);
}

// Start Quiz
async function startQuiz() {
    try {
        const response = await fetch('/quiz', {
            method: 'GET'
        });
        
        const data = await response.json();
        
        if (data.success) {
            gameState.sessionId = data.sessionId;
            gameState.currentQuestion = data.question.id;
            gameState.totalQuestions = data.totalQuestions;
            gameState.score = 0;
            gameState.answers = [];
            gameState.isAnswered = false;
            
            displayQuestion(data.question, data.progress);
            showScreen('quizScreen');
        }
    } catch (error) {
        console.error('Error starting quiz:', error);
        alert('Error starting quiz. Please try again.');
    }
}

// Display Question
function displayQuestion(question, progress) {
    // Update progress
    document.getElementById('questionNumber').textContent = `Question ${progress.current}/${progress.total}`;
    document.getElementById('scoreDisplay').textContent = `Score: ${gameState.score}`;
    
    // Update progress bar
    const progressPercent = (progress.current / progress.total) * 100;
    document.getElementById('progressFill').style.width = progressPercent + '%';
    
    // Update difficulty badge
    const diffBadge = document.getElementById('difficultyBadge');
    diffBadge.textContent = question.difficulty;
    diffBadge.className = question.difficulty.toLowerCase();
    
    // Display question
    document.getElementById('questionText').textContent = question.question;
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="radio" id="option${index}" name="answer" value="${option}">
            <label for="option${index}">${option}</label>
        `;
        optionsContainer.appendChild(optionDiv);
    });
    
    // Reset form
    document.getElementById('quizForm').reset();
    document.getElementById('feedbackContainer').style.display = 'none';
    gameState.isAnswered = false;
}

// Submit Answer
async function submitAnswer(event) {
    event.preventDefault();
    
    if (gameState.isAnswered) {
        return;
    }
    
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption) {
        alert('Please select an answer');
        return;
    }
    
    const answer = selectedOption.value;
    
    try {
        const response = await fetch('/quiz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sessionId: gameState.sessionId,
                answer: answer
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            gameState.score = data.currentScore;
            gameState.isAnswered = true;
            
            // Store answer details
            gameState.answers.push({
                question: data.question || 'Question',
                userAnswer: answer,
                correctAnswer: data.correctAnswer,
                isCorrect: data.isCorrect
            });
            
            // Show feedback
            showFeedback(data.isCorrect, data.correctAnswer, answer);
            
            // Check if quiz is complete
            if (data.quizComplete) {
                setTimeout(() => {
                    displayResults();
                }, 2000);
            } else {
                document.getElementById('nextBtn').style.display = 'block';
            }
        }
    } catch (error) {
        console.error('Error submitting answer:', error);
        alert('Error submitting answer. Please try again.');
    }
}

// Show Feedback
function showFeedback(isCorrect, correctAnswer, userAnswer) {
    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackMessage = document.getElementById('feedbackMessage');
    
    feedbackContainer.style.display = 'block';
    feedbackMessage.className = 'feedback-message ' + (isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
        feedbackMessage.textContent = '✅ Correct! Great job!';
    } else {
        feedbackMessage.textContent = `❌ Incorrect! The correct answer is: ${correctAnswer}`;
    }
    
    // Disable all radio buttons after answer
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.disabled = true;
    });
    
    // Hide submit button and show next button
    document.querySelector('button[type="submit"]').style.display = 'none';
}

// Next Question
async function nextQuestion() {
    try {
        const response = await fetch('/quiz', {
            method: 'GET'
        });
        
        const data = await response.json();
        
        if (data.success) {
            gameState.currentQuestion = data.question.id;
            displayQuestion(data.question, data.progress);
            
            // Reset form visibility
            document.querySelector('button[type="submit"]').style.display = 'block';
            document.getElementById('nextBtn').style.display = 'none';
            document.getElementById('feedbackContainer').style.display = 'none';
            
            // Re-enable radio buttons
            document.querySelectorAll('input[name="answer"]').forEach(input => {
                input.disabled = false;
            });
        }
    } catch (error) {
        console.error('Error fetching next question:', error);
    }
}

// Display Results
async function displayResults() {
    try {
        const response = await fetch(`/quiz/score?sessionId=${gameState.sessionId}`, {
            method: 'GET'
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Display final score
            document.getElementById('finalScore').textContent = data.finalScore;
            document.getElementById('percentageDisplay').textContent = data.percentage + '%';
            document.getElementById('performanceMessage').innerHTML = `<p>${data.performanceMessage}</p>`;
            
            // Display score breakdown
            document.getElementById('correctCount').textContent = data.scoreBreakdown.correct;
            document.getElementById('incorrectCount').textContent = data.scoreBreakdown.incorrect;
            document.getElementById('timeTaken').textContent = data.timeTaken + 's';
            
            // Display answer review
            const reviewContainer = document.getElementById('reviewContainer');
            reviewContainer.innerHTML = '';
            
            data.answers.forEach((answer, index) => {
                const reviewItem = document.createElement('div');
                reviewItem.className = 'answer-item ' + (answer.isCorrect ? 'correct' : 'incorrect');
                reviewItem.innerHTML = `
                    <div class="answer-question">Q${index + 1}: ${answer.question}</div>
                    <div class="answer-text"><strong>Your answer:</strong> ${answer.userAnswer}</div>
                    <div class="answer-text"><strong>Correct answer:</strong> ${answer.correctAnswer}</div>
                `;
                reviewContainer.appendChild(reviewItem);
            });
            
            showScreen('resultsScreen');
        }
    } catch (error) {
        console.error('Error fetching results:', error);
    }
}

// Restart Quiz
function restartQuiz() {
    startQuiz();
}

// UI Helper Functions
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    document.getElementById(screenId).classList.add('active');
}
