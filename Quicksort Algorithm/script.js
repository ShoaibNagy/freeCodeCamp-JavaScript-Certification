function quicksort(array) {
  // Base case: An array with 0 or 1 element is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Choose a pivot value (we'll use the first element for simplicity)
  const pivot = array[0];
  const left = [];
  const right = [];

  // Partition the array into two subarrays
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // Recursively sort the subarrays and combine them with the pivot in the middle
  return [...quicksort(left), pivot, ...quicksort(right)];
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

const unsortedArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(quicksort(unsortedArray)); 
// Output: [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]