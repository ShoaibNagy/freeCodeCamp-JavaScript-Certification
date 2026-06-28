// 1-7. Create the questions array with at least five objects
const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Geography",
    question: "What is the capital of Japan?",
    choices: ["Seoul", "Tokyo", "Beijing"],
    answer: "Tokyo"
  },
  {
    category: "History",
    question: "In which year did World War II end?",
    choices: ["1943", "1945", "1950"],
    answer: "1945"
  },
  {
    category: "Technology",
    question: "Who is the co-founder of Apple Inc.?",
    choices: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
    answer: "Steve Jobs"
  },
  {
    category: "Mathematics",
    question: "What is the value of Pi rounded to two decimal places?",
    choices: ["3.14", "3.15", "3.12"],
    answer: "3.14"
  }
];
console.log(Object.keys(questions));

// 8. Function to get a random question object from the array
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// 9. Function to get a random computer choice from the available choices
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// 10-14. Function to evaluate the computer's choice against the correct answer
function getResults(questionObj, computerChoice) {
  // 14. Use exact equality comparison (===)
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

// ==========================================
// Example Usage / Testing the Game Logic
// ==========================================

// 1. Pick a random question
const currentQuestion = getRandomQuestion(questions);
console.log(`Category: ${currentQuestion.category}`);
console.log(`Question: ${currentQuestion.question}`);
console.log(`Choices: ${currentQuestion.choices.join(", ")}`);

// 2. Let the computer make a random guess
const computerGuess = getRandomComputerChoice(currentQuestion.choices);
console.log(`\nComputer's guess: ${computerGuess}`);

// 3. Get and log the results
const result = getResults(currentQuestion, computerGuess);
console.log(`\nResult: ${result}`);