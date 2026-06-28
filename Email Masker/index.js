let email = "apple.pie@example.com";

function maskEmail(email) {
  const firstPart = email.slice(0, 1);
  const numOfCharsToBeReplaced = email.slice(1, email.indexOf('@') - 1).length; // second part
  const ThirdPart = email.slice(email.indexOf('@') - 1, email.length);
  const newEmail = firstPart + '*'.repeat(numOfCharsToBeReplaced) + ThirdPart;
  
  return newEmail;
}

console.log(maskEmail(email));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("apple.pie@example.com"));