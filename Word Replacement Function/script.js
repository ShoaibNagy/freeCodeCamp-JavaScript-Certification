function myReplace(str, before, after) {
  // Check if the first character of the 'before' word is uppercase
  if (before[0] === before[0].toUpperCase()) {
    // If it is, capitalize the first character of the 'after' word
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    // If it's not, ensure the first character of the 'after' word is lowercase
    after = after[0].toLowerCase() + after.slice(1);
  }

  // Replace the 'before' word with the newly formatted 'after' word
  return str.replace(before, after);
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(myReplace("Let us go to the store", "store", "mall")); 
// Output: "Let us go to the mall"

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); 
// Output: "He is Sitting on the couch"

console.log(myReplace("I think we should look up there", "up", "Down")); 
// Output: "I think we should look down there"

console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); 
// Output: "This has a spelling error"

console.log(myReplace("His name is Tom", "Tom", "john")); 
// Output: "His name is John"

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); 
// Output: "Let us get back to more Algorithms"