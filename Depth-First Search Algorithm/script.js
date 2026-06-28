function dfs(graph, root) {
  const visited = new Set();
  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    // Pop the most recently added node from the stack (LIFO)
    const node = stack.pop();

    // Only process the node if it hasn't been visited yet
    if (!visited.has(node)) {
      // Mark the node as visited and add it to the result
      visited.add(node);
      result.push(node);

      // Push all unvisited neighbors onto the stack
      const neighbors = graph[node];
      for (let i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === 1 && !visited.has(i)) {
          stack.push(i);
        }
      }
    }
  }

  return result;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

// Test 1: Connected graph starting from node 1
console.log(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 1));
// Output: [1, 2, 3, 0]

// Test 2: Same graph starting from node 3
console.log(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 3));
// Output: [3, 2, 1, 0]

// Test 3: Disconnected node
console.log(dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 3));
// Output: [3, 2]

// Test 4: Starting from a different component
console.log(dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 0));
// Output: [0, 1]