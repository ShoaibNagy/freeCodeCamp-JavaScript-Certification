function mutation([element1, element2]) {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr1 = element1.toLowerCase();
  const lowerStr2 = element2.toLowerCase();
  
  // Loop through each character of the second string
  for (let i = 0; i < lowerStr2.length; i++) {
    // If the first string does NOT include the current character, return false
    if (!lowerStr1.includes(lowerStr2[i])) {
      return false;
    }
  }
  
  // If the loop finishes without returning false, all characters were found
  return true;
}

// Test cases
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["Alien", "line"])); // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log(mutation(["Mary", "Army"])); // true
console.log(mutation(["Mary", "Aarmy"])); // true
console.log(mutation(["floor", "for"])); // true
console.log(mutation(["Noel", "Ole"])); // true