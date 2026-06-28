function frankenSplice(arr1, arr2, n) {
  const copiedArray = [...arr2];
  copiedArray.splice(n, 0, ...arr1);
  
  return copiedArray;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(frankenSplice([1, 2, 3], [4, 5], 1)); 
// Output: [4, 1, 2, 3, 5]

console.log(frankenSplice([1, 2], ["a", "b"], 1)); 
// Output: ["a", 1, 2, "b"]

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); 
// Output: ["head", "shoulders", "claw", "tentacle", "knees", "toes"]

console.log(frankenSplice([1, 2, 3, 4], [], 0)); 
// Output: [1, 2, 3, 4]

// Verifying immutability (Test Cases 5 & 6)
const originalArr1 = [1, 2, 3];
const originalArr2 = [4, 5];
frankenSplice(originalArr1, originalArr2, 1);

console.log(originalArr1); // Output: [1, 2, 3] (Remains unchanged)
console.log(originalArr2); // Output: [4, 5] (Remains unchanged)