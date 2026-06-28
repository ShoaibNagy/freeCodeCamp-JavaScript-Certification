function bouncer(arr) {
  // Use .filter() to create a new array.
  // The Boolean function acts as the callback, converting each element to its boolean equivalent.
  // .filter() keeps only the elements that evaluate to true (truthy values).
  return arr.filter(Boolean);
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(bouncer([7, "ate", "", false, 9])); 
// Output: [7, "ate", 9]

console.log(bouncer(["a", "b", "c"])); 
// Output: ["a", "b", "c"]

console.log(bouncer([false, null, 0, NaN, undefined, ""])); 
// Output: []

console.log(bouncer([null, NaN, 1, 2, undefined])); 
// Output: [1, 2]

console.log(bouncer([])); 
// Output: []

// Verifying immutability (Test Case 6)
const originalArray = [7, "ate", "", false, 9];
const filteredArray = bouncer(originalArray);

console.log(originalArray); // Output: [7, "ate", "", false, 9] (Remains unchanged)
console.log(filteredArray); // Output: [7, "ate", 9]