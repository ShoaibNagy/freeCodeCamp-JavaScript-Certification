function getIndexToIns(arr, val) {
  // 1. Sort the array in ascending numerical order
  // The callback (a, b) => a - b ensures numbers are sorted by value, not alphabetically
  arr.sort((a, b) => a - b);
  
  // 2. Use findIndex to locate the first number that is greater than or equal to val
  const index = arr.findIndex(num => num >= val);
  
  // 3. If findIndex returns -1, it means val is larger than all elements in the array.
  // In that case, it should be inserted at the very end (arr.length).
  // Otherwise, return the index found by findIndex.
  return index !== -1 ? index : arr.length;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // Output: 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(getIndexToIns([40, 60], 50));             // Output: 1
console.log(getIndexToIns([3, 10, 5], 3));            // Output: 0
console.log(getIndexToIns([5, 3, 20, 3], 5));         // Output: 2
console.log(getIndexToIns([2, 20, 10], 19));          // Output: 2
console.log(getIndexToIns([3, 10, 5], 11));           // Output: 3
console.log(getIndexToIns([], 5));                    // Output: 0