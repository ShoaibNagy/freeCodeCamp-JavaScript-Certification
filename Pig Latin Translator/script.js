function translatePigLatin(str) {
  // Find the index of the first vowel in the string
  const vowelIndex = str.search(/[aeiou]/);
  
  // If the word starts with a vowel, add "way" to the end
  if (vowelIndex === 0) {
    return str + "way";
  } 
  // If the word has no vowels, add "ay" to the end
  else if (vowelIndex === -1) {
    return str + "ay";
  } 
  // If the first vowel is in the middle, move the consonant cluster to the end and add "ay"
  else {
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(translatePigLatin("california")); 
// Output: "aliforniacay"

console.log(translatePigLatin("paragraphs")); 
// Output: "aragraphspay"

console.log(translatePigLatin("glove")); 
// Output: "oveglay"

console.log(translatePigLatin("algorithm")); 
// Output: "algorithmway"

console.log(translatePigLatin("eight")); 
// Output: "eightway"

console.log(translatePigLatin("schwartz")); 
// Output: "artzschway"

console.log(translatePigLatin("rhythm")); 
// Output: "rhythmay"