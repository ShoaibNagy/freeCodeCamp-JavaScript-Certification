function insertionSort(array) {
  // Iterate through the array starting from the second element
  for (let i = 1; i < array.length; i++) {
    // Store the current element to be inserted into the sorted portion
    let current = array[i];
    let j = i - 1;
    
    // Shift elements in the sorted portion that are greater than 'current' to the right
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    
    // Insert 'current' into its correct sorted position
    array[j + 1] = current;
  }
  
  return array;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(insertionSort([5, 4, 33, 2, 8])); 
// Output: [2, 4, 5, 8, 33]

const unsortedArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(insertionSort(unsortedArray)); 
// Output: [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]