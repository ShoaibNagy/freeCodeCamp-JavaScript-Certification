function selectionSort(array) {
  const currentLength = array.length;
  
  // Iterate through the array up to the second-to-last element
  for (let i = 0; i < currentLength - 1; i++) {
    // Assume the current position holds the minimum value
    let minIndex = i;
    
    // Find the actual minimum value in the remaining unsorted portion of the array
    for (let j = i + 1; j < currentLength; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the found minimum element with the element at the current position
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  
  return array;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

const unsortedArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(selectionSort(unsortedArray)); 
// Output: [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]