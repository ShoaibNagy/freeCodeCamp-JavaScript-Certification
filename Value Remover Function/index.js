function destroyer(arr, ...valsToRemove) {
  // Use the filter method to keep only the items that are NOT in the valsToRemove array
  return arr.filter(item => !valsToRemove.includes(item));
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); 
// Output: [1, 1]

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); 
// Output: [1, 5, 1]

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); 
// Output: [1]

console.log(destroyer([2, 3, 2, 3], 2, 3)); 
// Output: []

console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); 
// Output: ["hamburger"]

console.log(destroyer(
  ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], 
  "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"
)); 
// Output: [12, 92, 65]