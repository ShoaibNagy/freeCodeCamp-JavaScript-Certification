function addTogether(a, b) {
  if (typeof a !== 'number') {
    return undefined;
  }

  if (arguments.length === 1) {
    return function(c) {
      if (typeof c !== 'number') {
        return undefined;
      }
      return a + c;
    };
  }

  if (typeof b !== 'number') {
    return undefined;
  }

  return a + b;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(addTogether(2, 3));          // Output: 5
console.log(addTogether(23.4, 30));      // Output: 53.4
console.log(addTogether("2", 3));        // Output: undefined
console.log(addTogether(5, undefined));  // Output: undefined
console.log(addTogether("https://...")); // Output: undefined

const sumTwoAnd = addTogether(5);
console.log(typeof sumTwoAnd);           // Output: "function"
console.log(sumTwoAnd(7));               // Output: 12

console.log(addTogether(2)([3]));        // Output: undefined
console.log(addTogether(2, "3"));        // Output: undefined