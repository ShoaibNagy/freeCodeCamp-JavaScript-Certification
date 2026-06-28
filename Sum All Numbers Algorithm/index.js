function sumAll(arr) {
  // Find the minimum and maximum numbers in the array to ensure we always loop upwards
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  
  // This is a highly optimized, mathematical approach instead of the loop.
  const sum = ((max - min + 1) * (min + max)) / 2;
  
  return sum;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(sumAll([1, 4]));   // Output: 10
console.log(sumAll([4, 1]));   // Output: 10
console.log(sumAll([5, 10]));  // Output: 45
console.log(sumAll([10, 5]));  // Output: 45