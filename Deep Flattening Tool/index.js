function steamrollArray(arr) {
  // Use reduce to iterate through the array and build a flattened result
  return arr.reduce((acc, val) => {
    // If the current value is an array, recursively flatten it and concatenate the result
    if (Array.isArray(val)) {
      return acc.concat(steamrollArray(val));
    }
    // If it's not an array (e.g., number, string, object, or empty array result), just concatenate it
    return acc.concat(val);
  }, []);
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(steamrollArray([[["a"]], [["b"]]])); 
// Output: ["a", "b"]

console.log(steamrollArray([1, [2], [3, [[4]]]])); 
// Output: [1, 2, 3, 4]

console.log(steamrollArray([1, [], [3, [[4]]]])); 
// Output: [1, 3, 4]

console.log(steamrollArray([1, {}, [3, [[4]]]])); 
// Output: [1, {}, 3, 4]