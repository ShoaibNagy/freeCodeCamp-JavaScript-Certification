function chunkArrayInGroups(arr, size) {
  const chunkedArray = [];
  
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    chunkedArray.push(chunk);
  }
  
  return chunkedArray;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); 
// Output: [["a", "b"], ["c", "d"]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); 
// Output: [[0, 1, 2], [3, 4, 5]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); 
// Output: [[0, 1], [2, 3], [4, 5]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); 
// Output: [[0, 1, 2, 3], [4, 5]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); 
// Output: [[0, 1, 2], [3, 4, 5], [6]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); 
// Output: [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); 
// Output: [[0, 1], [2, 3], [4, 5], [6, 7], [8]]