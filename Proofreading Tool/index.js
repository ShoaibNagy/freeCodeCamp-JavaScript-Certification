/**
 * Checks if a word is a palindrome (case-insensitive).
 * @param {string} word - The word to check.
 * @returns {boolean} True if the word is a palindrome, false otherwise.
 */
function isPalindrome(word) {
  const lower = word.toLowerCase();
  let left = 0;
  let right = lower.length - 1;
  
  while (left < right) {
    if (lower[left] !== lower[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/**
 * Finds the indices of words in an array that are NOT palindromes.
 * @param {string[]} words - The array of words to check.
 * @returns {number[]} An array of indices where the words are not palindromes.
 */
function findPalindromeBreaks(words) {
  if (!words || words.length === 0) return [];
  
  const breaks = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}

/**
 * Finds all start indices of repeated phrases of a specific length.
 * @param {string[]} words - The array of words to search.
 * @param {number} phraseLength - The number of consecutive words in a phrase.
 * @returns {number[]} An array of start indices for repeated phrases.
 */
function findRepeatedPhrases(words, phraseLength) {
  // Return empty array if phraseLength is greater than or equal to the words array length
  if (phraseLength >= words.length) return [];
  
  const phraseCounts = {};
  const phraseIndices = {};
  
  // Iterate through the array to extract all possible phrases of the given length
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength);
    // Use JSON.stringify to create a unique string key for the array of words
    const key = JSON.stringify(phrase);
    
    if (!phraseCounts[key]) {
      phraseCounts[key] = 0;
      phraseIndices[key] = [];
    }
    
    phraseCounts[key]++;
    phraseIndices[key].push(i);
  }
  
  const result = [];
  // Collect indices only for phrases that appear more than once
  for (const key in phraseCounts) {
    if (phraseCounts[key] > 1) {
      result.push(...phraseIndices[key]);
    }
  }
  
  // Sort the indices in ascending order to maintain the sequence of appearance
  result.sort((a, b) => a - b);
  
  return result;
}

/**
 * Analyzes an array of texts to find repeated phrases and palindrome breaks.
 * @param {string[][]} texts - An array of texts (each text is an array of words).
 * @param {number} phraseLength - The length of the phrases to search for.
 * @returns {object[]} An array of result objects for each text.
 */
function analyzeTexts(texts, phraseLength) {
  if (!texts || texts.length === 0) return [];
  
  const results = [];
  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];
    results.push({
      repeatedPhrases: findRepeatedPhrases(text, phraseLength),
      palindromeBreaks: findPalindromeBreaks(text)
    });
  }
  
  return results;
}

// ==========================================
// Example Usage / Testing the Tool
// ==========================================

const texts = [
  ["racecar", "hello", "level", "world", "hello", "world"],
  ["Madam", "apple", "banana", "apple", "banana"],
  ["kayak", "civic", "radar"]
];

const analysisResults = analyzeTexts(texts, 2);
console.log(JSON.stringify(analysisResults, null, 2));