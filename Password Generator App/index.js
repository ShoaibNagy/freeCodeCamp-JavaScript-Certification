function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  // Loop 'length' times, each time picking a random character from the 'characters' string
  for (let i = 0; i < length; i++) {
    // Math.random() generates a float between 0 (inclusive) and 1 (exclusive)
    // Multiply by characters.length to scale it to the valid index range
    // Math.floor() rounds down to get a valid integer index
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Define a variable called password and assign it the result of calling generatePassword
const password = generatePassword(16);

// Log the message with the generated password
console.log("Generated password: " + password);
