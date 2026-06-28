// 1-6. Access DOM elements and save them in the required variables
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

// 7-11. Function to return a string of flags based on checked checkboxes
function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }
  if (globalFlag.checked) {
    flags += "g";
  }
  return flags;
}

// 12-20. Button click event listener to test the regex
testButton.addEventListener("click", () => {
  const flags = getFlags();
  const pattern = regexPattern.value;
  
  let regex;
  try {
    // Create a new RegExp object using the input pattern and flags
    regex = new RegExp(pattern, flags);
  } catch (e) {
    testResult.textContent = "Invalid regex";
    return;
  }

  const originalHTML = stringToTest.innerHTML;
  
  // Find all matches in the original text
  const matches = originalHTML.match(regex);

  if (matches) {
    // 15, 17-19. If there's a match, display them separated by ", " and highlight them
    testResult.textContent = matches.join(", ");
    
    // Replace matches with the same text wrapped in a span with class "highlight"
    // Note: String.prototype.replace() automatically replaces all occurrences if the 'g' flag is present, 
    // and only the first occurrence if it is not.
    stringToTest.innerHTML = originalHTML.replace(regex, '<span class="highlight">$&</span>');
  } else {
    // 16, 20. If there's no match, display "no match" and leave the test string unmodified
    testResult.textContent = "no match";
  }
});