function initStack() {
  return {
    collection: []
  };
}

function push(stack, element) {
  stack.collection.push(element);
}

function pop(stack) {
  if (isEmpty(stack)) {
    return undefined;
  }
  return stack.collection.pop();
}

function peek(stack) {
  if (isEmpty(stack)) {
    return undefined;
  }
  return stack.collection[stack.collection.length - 1];
}

function isEmpty(stack) {
  return stack.collection.length === 0;
}

function clear(stack) {
  stack.collection = [];
}

// ==========================================
// Example Usage / Testing the Functions
// ==========================================

const myStack = initStack();

console.log(isEmpty(myStack)); // Output: true

push(myStack, 10);
push(myStack, 20);
push(myStack, false); // Testing falsy values

console.log(peek(myStack)); // Output: false
console.log(isEmpty(myStack)); // Output: false (correctly handles falsy top element)

console.log(pop(myStack)); // Output: false
console.log(pop(myStack)); // Output: 20

clear(myStack);
console.log(isEmpty(myStack)); // Output: true
console.log(pop(myStack)); // Output: undefined