function adjacencyListToMatrix(adjList) {
  // 1. Determine the number of nodes from the adjacency list
  const numNodes = Object.keys(adjList).length;
  
  // 2. Initialize an N x N matrix filled with 0s
  const matrix = [];
  for (let i = 0; i < numNodes; i++) {
    matrix.push(new Array(numNodes).fill(0));
  }

  // 3. Iterate through the adjacency list and set matrix values to 1 for existing edges
  for (const node in adjList) {
    const i = parseInt(node, 10); // Convert string key to integer index
    const neighbors = adjList[node];
    
    for (const neighbor of neighbors) {
      matrix[i][neighbor] = 1;
    }
  }

  // 4. Print each row of the matrix
  for (const row of matrix) {
    console.log(row);
  }

  // 5. Return the adjacency matrix
  return matrix;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log("Test 1:");
adjacencyListToMatrix({0: [1, 2], 1: [2], 2: [0, 3], 3: [2]});

console.log("\nTest 2:");
adjacencyListToMatrix({0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2]});

console.log("\nTest 3:");
adjacencyListToMatrix({0: [], 1: [], 2: []});