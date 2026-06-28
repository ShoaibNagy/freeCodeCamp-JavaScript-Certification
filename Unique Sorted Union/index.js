function uniteUnique(...arrays) {
  // 1. Combine all the argument arrays into a single flat array
  const combinedArray = [].concat(...arrays);
  
  // 2. Create a Set from the combined array to automatically filter out duplicates
  // A Set only stores unique values and preserves the order in which they were first inserted
  const uniqueSet = new Set(combinedArray);
  
  // 3. Convert the Set back into an array using the spread operator and return it
  return [...uniqueSet];
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); 
// Output: [1, 3, 2, 5, 4]

console.log(uniteUnique([1, 2, 3], [5, 2, 1])); 
// Output: [1, 2, 3, 5]

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); 
// Output: [1, 2, 3, 5, 4, 6, 7, 8]

console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])); 
// Output: [1, 3, 2, 5, 4, 6]

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); 
// Output: [1, 3, 2, 5, 4]