function largestOfAll(arr) {
  // Use .map() to iterate over each sub-array
  // Use Math.max() combined with the spread operator (...) to find the largest number in each sub-array
  return arr.map(subArray => Math.max(...subArray));
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); 
// Output: [5, 27, 39, 1001]

console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); 
// Output: [27, 5, 39, 1001]

console.log(largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])); 
// Output: [9, 35, 97, 1000000]

console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])); 
// Output: [25, 48, 21, -3]