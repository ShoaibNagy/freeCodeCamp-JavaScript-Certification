function countdown(n) {
  // Base case: if n is less than 1, return an empty array
  if (n < 1) {
    return [];
  }
  
  return [n, ...countdown(n - 1)];
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(countdown(5));   // Output: [5, 4, 3, 2, 1]
console.log(countdown(10));  // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(countdown(1));   // Output: [1]
console.log(countdown(0));   // Output: []
console.log(countdown(-3));  // Output: []