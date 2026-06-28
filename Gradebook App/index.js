/**
 * Calculates the average of an array of test scores.
 * @param {number[]} scores - Array of numeric test scores.
 * @returns {number} The average score.
 */
function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

/**
 * Returns a letter grade based on a numeric score.
 * @param {number} score - The numeric test score.
 * @returns {string} The corresponding letter grade.
 */
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/**
 * Determines whether a score corresponds to a passing grade.
 * @param {number} score - The numeric test score.
 * @returns {boolean} True if the grade is passing (not "F"), false otherwise.
 */
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

/**
 * Generates a summary message for a student based on class scores and their own score.
 * @param {number[]} scores - Array of all class test scores.
 * @param {number} studentScore - The individual student's score.
 * @returns {string} A formatted message about the student's performance.
 */
function studentMsg(scores, studentScore) {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);
  
  const passFailMessage = passed
    ? "You passed the course."
    : "You failed the course.";
  
  return `Class average: ${average}. Your grade: ${grade}. ${passFailMessage}`;
}

// ==========================================
// Example Usage / Testing the Functions
// ==========================================

// Testing getAverage
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // 85.4
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100])); // 92.4
console.log(getAverage([10, 20, 30, 40, 55, 65, 75, 83])); // 47.25
console.log(getAverage([10, 20, 30, 40, 50, 60, 70, 97])); // 47.125

// Testing getGrade
console.log(getGrade(100)); // "A+"
console.log(getGrade(95));  // "A"
console.log(getGrade(85));  // "B"
console.log(getGrade(75));  // "C"
console.log(getGrade(65));  // "D"
console.log(getGrade(55));  // "F"

// Testing hasPassingGrade
console.log(hasPassingGrade(95)); // true (A)
console.log(hasPassingGrade(55)); // false (F)

// Testing studentMsg
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// "Class average: 71.7. Your grade: F. You failed the course."

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
// "Class average: 50.8. Your grade: A+. You passed the course."

console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
// "Class average: 48.25. Your grade: B. You passed the course."

console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));
// "Class average: 45.625. Your grade: C. You passed the course."