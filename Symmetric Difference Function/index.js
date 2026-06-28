function diffArray(arr1, arr2) {
  // Combine both arrays into a single array
  const combined = arr1.concat(arr2);
  
  // Use the filter method to keep only the items that are NOT present in both arrays
  // If an item is in arr1 AND arr2, the condition evaluates to false, filtering it out
  return combined.filter(item => !(arr1.includes(item) && arr2.includes(item)));
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); 
// Output: ["pink wool"]

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); 
// Output: ["diorite", "pink wool"]

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"])); 
// Output: ["pen", "pencil", "notebook"]

console.log(diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"])); 
// Output: ["car", "train", "plane"]

console.log(diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"])); 
// Output: ["banana", "grape"]

console.log(diffArray([], ["apple", "banana"])); 
// Output: ["apple", "banana"]

console.log(diffArray(["apple", "banana"], [])); 
// Output: ["apple", "banana"]

console.log(diffArray([], [])); 
// Output: []