function titleCase(str) {
  // Split the string into an array of words by spaces
  const words = str.split(" ");
  const result = [];
  
  // Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    
    // Handle the edge case of an empty string (e.g., from double spaces)
    if (word.length === 0) {
      result.push(word);
    } else {
      // Convert the entire word to lowercase first
      const lowerWord = word.toLowerCase();
      // Capitalize the first letter and concatenate it with the rest of the lowercase word
      const titleWord = lowerWord[0].toUpperCase() + lowerWord.slice(1);
      result.push(titleWord);
    }
  }
  
  // Join the processed words back into a single string with spaces
  return result.join(" ");
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(titleCase("I'm a little tea pot"));
// Output: "I'm A Little Tea Pot"

console.log(titleCase("sHoRt AnD sToUt"));
// Output: "Short And Stout"

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
// Output: "Here Is My Handle Here Is My Spout"

console.log(titleCase("I like to code"));
// Output: "I Like To Code"

console.log(titleCase("javaScript is fun"));
// Output: "Javascript Is Fun"