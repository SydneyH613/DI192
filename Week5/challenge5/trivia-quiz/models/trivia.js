// Trivia Model - Hard-coded questions and answers

const triviaQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
    answer: "Blue whale",
    difficulty: "Easy"
  },
  {
    id: 4,
    question: "Who wrote the play 'Hamlet'?",
    options: ["Mark Twain", "Charles Dickens", "William Shakespeare", "Jane Austen"],
    answer: "William Shakespeare",
    difficulty: "Medium"
  },
  {
    id: 5,
    question: "What is the chemical symbol for Gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    answer: "Au",
    difficulty: "Medium"
  },
  {
    id: 6,
    question: "In what year did the Titanic sink?",
    options: ["1912", "1915", "1920", "1905"],
    answer: "1912",
    difficulty: "Medium"
  },
  {
    id: 7,
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
    answer: "Vatican City",
    difficulty: "Hard"
  },
  {
    id: 8,
    question: "How many bones does an adult human have?",
    options: ["186", "206", "216", "226"],
    answer: "206",
    difficulty: "Hard"
  },
  {
    id: 9,
    question: "What is the deepest ocean trench?",
    options: ["Tonga Trench", "Kuril Trench", "Mariana Trench", "Kermadec Trench"],
    answer: "Mariana Trench",
    difficulty: "Hard"
  },
  {
    id: 10,
    question: "Which physicist developed the Theory of Relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Max Planck"],
    answer: "Albert Einstein",
    difficulty: "Medium"
  }
];

module.exports = {
  triviaQuestions,
  getTotalQuestions: () => triviaQuestions.length,
  getQuestion: (id) => triviaQuestions.find(q => q.id === id),
  getAllQuestions: () => triviaQuestions
};
