function sumFibs(num) {
  let a = 0;
  let b = 1;
  let sum = 0;

  while (b <= num) {
    if (b % 2 !== 0) {
      sum += b;
    }
    
    const next = a + b;
    a = b;
    b = next;
  }

  return sum;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(sumFibs(1));       // Output: 2 (1 + 1)
console.log(sumFibs(4));       // Output: 5 (1 + 1 + 3)
console.log(sumFibs(1000));    // Output: 1785
console.log(sumFibs(4000000)); // Output: 4613732
console.log(sumFibs(75024));   // Output: 60696
console.log(sumFibs(75025));   // Output: 135721