function fibonacci(n) {
  // Initialize the sequence array with the first two Fibonacci numbers
  const sequence = [0, 1];

  // Handle base cases where n is 0 or 1
  if (n === 0) return sequence[0];
  if (n === 1) return sequence[1];

  // Iteratively compute and append each subsequent Fibonacci number
  for (let i = 2; i <= n; i++) {
    const nextNum = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNum);
  }

  // Return the n-th Fibonacci number
  return sequence[n];
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(fibonacci(0));  // Output: 0
console.log(fibonacci(1));  // Output: 1
console.log(fibonacci(2));  // Output: 1
console.log(fibonacci(3));  // Output: 2
console.log(fibonacci(5));  // Output: 5
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(15)); // Output: 610