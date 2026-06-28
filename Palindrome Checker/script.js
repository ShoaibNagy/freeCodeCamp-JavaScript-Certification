const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Reverse the string and compare
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  return cleanedStr === reversedStr;
}

function checkPalindrome() {
  const inputValue = textInput.value.trim();
  
  // Check if input is empty
  if (inputValue === "") {
    alert("Please input a value.");
    return;
  }
  
  // Check if it's a palindrome
  if (isPalindrome(inputValue)) {
    result.textContent = `${inputValue} is a palindrome.`;
  } else {
    result.textContent = `${inputValue} is not a palindrome.`;
  }
}

// Add click event listener to the button
checkBtn.addEventListener("click", checkPalindrome);

// Optional: Allow pressing Enter key to check
textInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkPalindrome();
  }
});