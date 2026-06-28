function initQueue() {
  return {
    collection: []
  };
}

function print(queue) {
  console.log(queue.collection);
}

function enqueue(queue, element) {
  queue.collection.push(element);
}

function dequeue(queue) {
  if (isEmpty(queue)) {
    return undefined;
  }
  return queue.collection.shift();
}

function front(queue) {
  if (isEmpty(queue)) {
    return undefined;
  }
  return queue.collection[0];
}

function size(queue) {
  return queue.collection.length;
}

function isEmpty(queue) {
  return queue.collection.length === 0;
}

// ==========================================
// Example Usage / Testing the Functions
// ==========================================

const myQueue = initQueue();

console.log(isEmpty(myQueue)); // Output: true

enqueue(myQueue, "First");
enqueue(myQueue, "Second");
enqueue(myQueue, "Third");

console.log(size(myQueue));    // Output: 3
console.log(front(myQueue));   // Output: "First"
console.log(isEmpty(myQueue)); // Output: false

console.log(dequeue(myQueue)); // Output: "First"
console.log(dequeue(myQueue)); // Output: "Second"

console.log(size(myQueue));    // Output: 1
console.log(dequeue(myQueue)); // Output: "Third"
console.log(dequeue(myQueue)); // Output: undefined (Queue is now empty)