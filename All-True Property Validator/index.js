function truthCheck(collection, pre) {
  // Use the .every() method to check if the property 'pre' is truthy for all objects in the collection
  return collection.every(obj => obj[pre]);
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(truthCheck(
  [
    {name: "Quincy", role: "Founder", isBot: false}, 
    {name: "Naomi", role: "", isBot: false}, 
    {name: "Camperbot", role: "Bot", isBot: true}
  ], 
  "isBot"
)); // Output: false (because isBot is false for the first two objects)

console.log(truthCheck(
  [
    {name: "Quincy", role: "Founder", isBot: false}, 
    {name: "Naomi", role: "", isBot: false}, 
    {name: "Camperbot", role: "Bot", isBot: true}
  ], 
  "name"
)); // Output: true (all names are non-empty strings)

console.log(truthCheck(
  [
    {name: "Quincy", role: "Founder", isBot: false}, 
    {name: "Naomi", role: "", isBot: false}, 
    {name: "Camperbot", role: "Bot", isBot: true}
  ], 
  "role"
)); // Output: false (because role is "" for Naomi, which is falsy)

console.log(truthCheck(
  [
    {name: "Pikachu", number: 25, caught: 3}, 
    {name: "Togepi", number: 175, caught: 1}, 
    {name: "MissingNo", number: NaN, caught: 0}
  ], 
  "number"
)); // Output: false (because NaN is falsy)

console.log(truthCheck(
  [
    {id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, 
    {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, 
    {id: null, data: {}}
  ], 
  "data"
)); // Output: true (empty objects {} are truthy in JavaScript)

document.querySelector().style.borderColor