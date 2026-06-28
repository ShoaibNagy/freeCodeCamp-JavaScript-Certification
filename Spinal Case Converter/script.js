function spinalCase(str) {
  // 1. Insert a space between any lowercase letter and an uppercase letter (handles camelCase/PascalCase)
  // 2. Replace all spaces and underscores with hyphens
  // 3. Convert the entire string to lowercase
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(spinalCase("This Is Spinal Tap")); 
// Output: "this-is-spinal-tap"

console.log(spinalCase("thisIsSpinalTap")); 
// Output: "this-is-spinal-tap"

console.log(spinalCase("The_Andy_Griffith_Show")); 
// Output: "the-andy-griffith-show"

console.log(spinalCase("Teletubbies say Eh-oh")); 
// Output: "teletubbies-say-eh-oh"

console.log(spinalCase("AllThe-small Things")); 
// Output: "all-the-small-things"