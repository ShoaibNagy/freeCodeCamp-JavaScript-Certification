function smallestCommons(arr) {
  // Helper function to find the Greatest Common Divisor (GCD) using the Euclidean algorithm
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Helper function to find the Least Common Multiple (LCM) of two numbers
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // 1. Find the minimum and maximum of the range to handle out-of-order inputs
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  // 2. Initialize the result with the first number in the range
  let result = min;

  // 3. Iteratively calculate the LCM for each number in the range
  for (let i = min + 1; i <= max; i++) {
    result = lcm(result, i);
  }

  return result;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(smallestCommons([1, 5]));   // Output: 60
console.log(smallestCommons([5, 1]));   // Output: 60
console.log(smallestCommons([2, 10]));  // Output: 2520
console.log(smallestCommons([1, 13]));  // Output: 360360
console.log(smallestCommons([23, 18])); // Output: 6056820