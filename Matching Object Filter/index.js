function whatIsInAName(collection, source) {
  // Extract all the keys from the source object
  const sourceKeys = Object.keys(source);
  
  // Filter the collection array
  return collection.filter(obj => {
    // For each object, check if it satisfies the condition for ALL keys in the source object
    return sourceKeys.every(key => {
      // The object must have the key AND the value must strictly match the source's value
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
)); 

console.log(whatIsInAName(
  [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], 
  { "apple": 1 }
)); 

console.log(whatIsInAName(
  [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], 
  { "apple": 1, "cookie": 2 }
)); 

console.log(whatIsInAName(
  [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], 
  { "apple": 1, "bat": 2 }
)); 

console.log(whatIsInAName(
  [{"a": 1, "b": 2, "c": 3}], 
  {"a": 1, "b": 9999, "c": 3}
)); 