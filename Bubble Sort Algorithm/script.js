function bubbleSort(array) {
  let currentLength = array.length;
  let swapped;
  
  // Continue looping until no swaps occur in a full pass
  do {
    swapped = false;
    
    // Iterate through the array, comparing adjacent elements
    for (let index = 0; index < currentLength - 1; index++) {
      // If the current element is greater than the next, swap them
      if (array[index] > array[index + 1]) {
        let temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
        swapped = true;
      }
    }
    
    // Optimization: after each pass, the largest unsorted element is at the end,
    // so we can reduce the range of the next pass by 1.
    currentLength--;
  } while (swapped);
  
  return array;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

const unsortedArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(bubbleSort(unsortedArray)); 
// Output: [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]