function pyramid(pattern, rows, inverted) {
  // Start the result with a newline character
  let result = "\n";
  
  for (let i = 0; i < rows; i++) {
    let spaces, chars;
    
    if (!inverted) {
      // Vertex facing upwards
      // Leading spaces decrease as we go down
      // Characters increase by 2 each row
      spaces = rows - 1 - i;
      chars = 2 * i + 1;
    } else {
      // Vertex facing downwards
      // Leading spaces increase as we go down
      // Characters decrease by 2 each row
      spaces = i;
      chars = 2 * (rows - 1 - i) + 1;
    }
    
    // Build the row: leading spaces + repeated pattern character + newline
    result += " ".repeat(spaces) + pattern.repeat(chars) + "\n";
  }
  
  return result;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(pyramid("o", 4, false));
// Output:
// 
//    o
//   ooo
//  ooooo
// ooooooo
// 

console.log(pyramid("p", 5, true));
// Output:
// 
// ppppppppp
//  ppppppp
//   ppppp
//    ppp
//     p
// 

// Verifying exact string output against test cases
console.log(pyramid("o", 4, false) === "\n   o\n  ooo\n ooooo\nooooooo\n"); 
// Output: true

console.log(pyramid("p", 5, true) === "\nppppppppp\n ppppppp\n  ppppp\n   ppp\n    p\n"); 
// Output: true