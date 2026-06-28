function pairElement(str) {
  const basePairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };
  
  const result = [];
  
  for (let i = 0; i < str.length; i++) {
    const base = str[i];
    result.push([base, basePairs[base]]);
  }
  
  return result;
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(pairElement("ATCGA")); 
// Output: [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

console.log(pairElement("TTGAG")); 
// Output: [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]

console.log(pairElement("CTCTA")); 
// Output: [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]