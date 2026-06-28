function permuteString(str, prefix = "", results = []) {
  if (str.length === 0) {
    results.push(prefix);
    return results;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    
    permuteString(remaining, prefix + char, results);
  }

  return [...new Set(results)];
}

// ==========================================
// Example Usage / Testing the Function
// ==========================================

console.log(permuteString("far")); 
// Output: [ 'far', 'fra', 'afr', 'arf', 'rfa', 'raf' ]

console.log(permuteString("fcc")); 
// Output: [ 'fcc', 'cfc', 'ccf' ]

console.log(permuteString("p")); 
// Output: [ 'p' ]

console.log(permuteString("")); 
// Output: [ '' ]

console.log(permuteString("walk")); 
// Output: [ 'walk', 'wakl', 'wlak', 'wlka', 'wkla', 'wkal', 'awlk', 'awkl', 'alwk', 'alkw', 'aklw', 'akwl', 'lawk', 'lakw', 'lwak', 'lwka', 'lkaw', 'lkwa', 'kawl', 'kalw', 'kwal', 'kwla', 'klaw', 'klwa' ]