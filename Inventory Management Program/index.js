// 1. Declare an empty array named inventory
const inventory = [];

// 2-5. Function to find the index of a product by name (case-insensitive)
function findProductIndex(name) {
  const lowerName = name.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === lowerName) {
      return i;
    }
  }
  return -1;
}

// 6-10. Function to add a product or update its quantity
function addProduct(product) {
  const lowerName = product.name.toLowerCase();
  const index = findProductIndex(lowerName);
  
  if (index !== -1) {
    // Product exists: update quantity
    inventory[index].quantity += product.quantity;
    console.log(`${lowerName} quantity updated`);
  } else {
    // Product doesn't exist: add it to inventory
    inventory.push({ name: lowerName, quantity: product.quantity });
    console.log(`${lowerName} added to inventory`);
  }
}

// 11-16. Function to remove a specified quantity of a product
function removeProduct(name, quantity) {
  const lowerName = name.toLowerCase();
  const index = findProductIndex(lowerName);
  
  if (index === -1) {
    // Product not found in inventory
    console.log(`${lowerName} not found`);
    return;
  }
  
  const product = inventory[index];
  
  if (product.quantity < quantity) {
    // Not enough stock to fulfill the request
    console.log(`Not enough ${lowerName} available, remaining pieces: ${product.quantity}`);
    return;
  }
  
  // Subtract the quantity
  product.quantity -= quantity;
  console.log(`Remaining ${lowerName} pieces: ${product.quantity}`);
  
  // If quantity reaches zero, remove the product from inventory
  if (product.quantity === 0) {
    inventory.splice(index, 1);
  }
}

// ==========================================
// Example Usage / Testing the Functions
// ==========================================

// Test adding a new product
addProduct({ name: "FLOUR", quantity: 20 });
// Output: flour added to inventory

// Test updating an existing product's quantity
addProduct({ name: "FLOUR", quantity: 5 });
// Output: flour quantity updated

// Test adding another product
addProduct({ name: "RICE", quantity: 5 });
// Output: rice added to inventory

console.log(inventory);
// Output: [{ name: "flour", quantity: 25 }, { name: "rice", quantity: 5 }]

// Test findProductIndex with mixed case
console.log(findProductIndex("FloUr")); // Output: 0
console.log(findProductIndex("banana")); // Output: -1

// Test removing with sufficient stock
removeProduct("FLOUR", 5);
// Output: Remaining flour pieces: 20

// Test removing with insufficient stock
removeProduct("RICE", 10);
// Output: Not enough rice available, remaining pieces: 5

// Test removing a non-existent product
removeProduct("BANANA", 2);
// Output: banana not found

// Test removing until quantity reaches zero
removeProduct("RICE", 5);
// Output: Remaining rice pieces: 0
console.log(inventory);
// Output: [{ name: "flour", quantity: 20 }] (rice has been removed)