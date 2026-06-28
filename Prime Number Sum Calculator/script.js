function sumPrimes(num) {
  // If the input number is less than 2, there are no prime numbers to sum
  if (num < 2) {
    return 0;
  }

  let sum = 0;

  // Iterate through all numbers from 2 up to the provided number
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    
    // Check if the current number is divisible by any number up to its square root
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break; // Exit the loop early if a divisor is found
      }
    }
    
    // If the number is prime, add it to the sum
    if (isPrime) {
      sum += i;
    }
  }

  return sum;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(sumPrimes(10));  // Output: 17  (2 + 3 + 5 + 7)
console.log(sumPrimes(5));   // Output: 10  (2 + 3 + 5)
console.log(sumPrimes(2));   // Output: 2
console.log(sumPrimes(0));   // Output: 0
console.log(sumPrimes(977)); // Output: 73156