// Emoji Guessing Game - Client-side JavaScript

// Game state
const gameState = {
    currentQuestion: null,
    score: 0,
    questionCount: 0,
    sessionId: generateSessionId(),
    playerName: '',
    isGameActive: false
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadLeaderboardPreview();
    setupEventListeners();
    showStartScreen();
});

// Event Listeners
function setupEventListeners() {
    // Start form
    document.getElementById('startForm').addEventListener('submit', startGame);
    
    // Game form
    document.getElementById('gameForm').addEventListener('submit', submitGuess);
    
    // End game button
    document.getElementById('endGameBtn').addEventListener('click', endGame);
    
    // Play again button
    document.getElementById('playAgainBtn').addEventListener('click', () => {
        showStartScreen();
    });
    
    // View leaderboard button
    document.getElementById('viewLeaderboardBtn').addEventListener('click', showLeaderboardScreen);
    
    // Back to menu button
    document.getElementById('backToMenuBtn').addEventListener('click', () => {
        showStartScreen();
    });
}

// Generate a unique session ID
function generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Fetch next question from server
async function fetchNextQuestion() {
    try {
        const response = await fetch('/api/question');
        const data = await response.json();
        if (data.success) {
            return data.data;
        }
    } catch (error) {
        console.error('Error fetching question:', error);
        showFeedback('Error loading question', 'incorrect');
    }
}

// Start the game
async function startGame(event) {
    event.preventDefault();
    
    gameState.playerName = document.getElementById('playerName').value;
    gameState.score = 0;
    gameState.questionCount = 0;
    gameState.isGameActive = true;
    
    // Fetch first question
    gameState.currentQuestion = await fetchNextQuestion();
    
    if (gameState.currentQuestion) {
        displayQuestion();
        showScreen('gameScreen');
    }
}

// Display the current question
function displayQuestion() {
    const question = gameState.currentQuestion;
    
    // Update emoji display
    document.getElementById('emojiDisplay').textContent = question.emoji;
    
    // Clear feedback
    clearFeedback();
    
    // Create option radio buttons
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = `
            <input type="radio" id="option${index}" name="guess" value="${option}">
            <label for="option${index}">${option}</label>
        `;
        div.style.display = 'block';
        optionsContainer.appendChild(div);
    });
    
    // Reset form
    document.getElementById('gameForm').reset();
    
    // Update score display
    document.getElementById('currentScore').textContent = gameState.score;
    document.getElementById('questionCount').textContent = gameState.questionCount;
}

// Submit a guess
async function submitGuess(event) {
    event.preventDefault();
    
    const selectedOption = document.querySelector('input[name="guess"]:checked');
    
    if (!selectedOption) {
        showFeedback('Please select an answer', 'incorrect');
        return;
    }
    
    const guess = selectedOption.value;
    
    try {
        const response = await fetch('/api/guess', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                guess: guess,
                sessionId: gameState.sessionId
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            gameState.score = data.score;
            gameState.questionCount = data.totalGuesses;
            gameState.currentQuestion = data.nextQuestion;
            
            const feedbackClass = data.isCorrect ? 'correct' : 'incorrect';
            const feedbackMessage = data.isCorrect 
                ? `🎉 Correct! It's a ${data.correctAnswer}!` 
                : `❌ Wrong! It was a ${data.correctAnswer}`;
            
            showFeedback(feedbackMessage, feedbackClass);
            
            // Load next question after a delay
            setTimeout(() => {
                displayQuestion();
            }, 2000);
        }
    } catch (error) {
        console.error('Error submitting guess:', error);
        showFeedback('Error submitting guess', 'incorrect');
    }
}

// End the game
async function endGame() {
    if (!gameState.isGameActive) return;
    
    gameState.isGameActive = false;
    
    try {
        const response = await fetch('/api/end-game', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                playerName: gameState.playerName,
                sessionId: gameState.sessionId
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Display end screen
            const accuracy = gameState.questionCount > 0 
                ? Math.round((gameState.score / gameState.questionCount) * 100) 
                : 0;
            
            document.getElementById('finalScore').textContent = gameState.score;
            document.getElementById('finalQuestions').textContent = gameState.questionCount;
            document.getElementById('finalAccuracy').textContent = accuracy;
            
            showScreen('endScreen');
            
            // Reload leaderboard preview
            loadLeaderboardPreview();
        }
    } catch (error) {
        console.error('Error ending game:', error);
    }
}

// Load and display leaderboard preview
async function loadLeaderboardPreview() {
    try {
        const response = await fetch('/api/leaderboard');
        const data = await response.json();
        
        if (data.success && data.leaderboard.length > 0) {
            const previewHtml = data.leaderboard.slice(0, 5).map((entry, index) => `
                <div style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">
                    <strong>${entry.rank}. ${entry.playerName}</strong>
                    <span style="float: right;">Score: ${entry.score}/${entry.totalGuesses} (${entry.accuracy}%)</span>
                </div>
            `).join('');
            
            document.getElementById('leaderboardPreview').innerHTML = previewHtml || '<p>No scores yet</p>';
        }
    } catch (error) {
        console.error('Error loading leaderboard:', error);
    }
}

// Load and display full leaderboard
async function showLeaderboardScreen() {
    try {
        const response = await fetch('/api/leaderboard');
        const data = await response.json();
        
        if (data.success) {
            const tbody = document.getElementById('leaderboardBody');
            tbody.innerHTML = '';
            
            if (data.leaderboard.length === 0) {
                tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px;">No scores yet. Be the first to play!</td></tr>';
            } else {
                data.leaderboard.forEach(entry => {
                    const row = `
                        <tr>
                            <td>${entry.rank}</td>
                            <td>${entry.playerName}</td>
                            <td><strong>${entry.score}</strong></td>
                            <td>${entry.totalGuesses}</td>
                            <td>${entry.accuracy}%</td>
                            <td>${entry.date}</td>
                        </tr>
                    `;
                    tbody.innerHTML += row;
                });
            }
        }
        
        showScreen('leaderboardScreen');
    } catch (error) {
        console.error('Error loading leaderboard:', error);
    }
}

// UI Helper Functions

function showFeedback(message, className) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = `feedback show ${className}`;
}

function clearFeedback() {
    const feedback = document.getElementById('feedback');
    feedback.className = 'feedback';
    feedback.textContent = '';
}

function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    document.getElementById(screenId).classList.add('active');
}

function showStartScreen() {
    document.getElementById('playerName').value = '';
    gameState.sessionId = generateSessionId();
    showScreen('startScreen');
}
