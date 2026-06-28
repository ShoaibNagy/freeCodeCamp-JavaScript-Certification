function findLongestWordLength(sentence) {
  if(sentence.trim() === "") return;
  
  const words = sentence.split(" ");
  let longestLength = 0;
  for(const word of words) {
    if(longestLength < word.length) {
      longestLength = word.length;
    }
  }

  return longestLength;
}