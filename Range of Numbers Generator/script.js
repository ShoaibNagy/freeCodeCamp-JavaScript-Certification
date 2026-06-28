function rangeOfNumbers(startNum, endNum) {
  // Base case: if startNum equals endNum, return an array with just that number
  if (startNum === endNum) {
    return [startNum];
  }
  
  // Recursive step: call the function with endNum - 1, then add the current endNum to the array
  const numbers = rangeOfNumbers(startNum, endNum - 1);
  numbers.push(endNum);
  
  return numbers;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(rangeOfNumbers(1, 5));   // Output: [1, 2, 3, 4, 5]
console.log(rangeOfNumbers(6, 9));   // Output: [6, 7, 8, 9]
console.log(rangeOfNumbers(4, 4));   // Output: [4]
console.log(rangeOfNumbers(10, 15)); // Output: [10, 11, 12, 13, 14, 15]
console.log(rangeOfNumbers(2, 8));   // Output: [2, 3, 4, 5, 6, 7, 8]