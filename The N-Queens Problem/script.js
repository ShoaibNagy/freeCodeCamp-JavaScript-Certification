function dfsNQueens(n) {
  // If n is less than 1, return an empty array
  if (n < 1) {
    return [];
  }

  const solutions = [];

  // Helper function to check if placing a queen at (row, col) is valid
  function isValid(queens, row, col) {
    for (let r = 0; r < row; r++) {
      const c = queens[r];
      // Check if the column is the same or if they share a diagonal
      if (c === col || Math.abs(c - col) === Math.abs(r - row)) {
        return false;
      }
    }
    return true;
  }

  // Helper function for the Depth-First Search
  function dfs(row, queens) {
    // Base case: if we've placed queens in all rows, we found a valid solution
    if (row === n) {
      solutions.push([...queens]);
      return;
    }

    // Try placing a queen in each column of the current row
    for (let col = 0; col < n; col++) {
      if (isValid(queens, row, col)) {
        queens.push(col);       // Place the queen
        dfs(row + 1, queens);   // Recurse to the next row
        queens.pop();           // Backtrack and remove the queen
      }
    }
  }

  // Start the DFS from the first row (row 0) with an empty board
  dfs(0, []);

  return solutions;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(dfsNQueens(1)); 
// Output: [[0]]

console.log(dfsNQueens(2)); 
// Output: []

console.log(dfsNQueens(3)); 
// Output: []

console.log(dfsNQueens(4)); 
// Output: [[1, 3, 0, 2], [2, 0, 3, 1]]

console.log(dfsNQueens(5).length); 
// Output: 10

console.log(dfsNQueens(8).length); 
// Output: 92