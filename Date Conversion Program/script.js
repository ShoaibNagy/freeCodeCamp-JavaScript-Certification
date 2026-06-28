// 1. Create a variable named currentDate and assign it the current date and time
const currentDate = new Date();

// 2. Create a variable named currentDateFormat with the required string format
const currentDateFormat = `Current Date and Time: ${currentDate}`;

// 3. Log the value of currentDateFormat to the console
console.log(currentDateFormat);

// 4 & 5. Create the formatDateMMDDYYYY function
function formatDateMMDDYYYY(date) {
  // Use toLocaleDateString with 'en-US' locale to get the M/D/YYYY format
  const formattedDate = date.toLocaleDateString('en-US');
  return `Formatted Date (MM/DD/YYYY): ${formattedDate}`;
}

// 7 & 8. Create the formatDateLong function
function formatDateLong(date) {
  // Define options to get the "Month Day, Year" format
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // Use toLocaleDateString with 'en-US' locale and the defined options
  const formattedDate = date.toLocaleDateString('en-US', options);
  return `Formatted Date (Month Day, Year): ${formattedDate}`;
}

// ==========================================
// Example Usage / Testing the Functions
// ==========================================

// Creating the exact date object mentioned in the test cases to verify the output
const testDate = new Date('Fri Sep 27 2024 16:16:11 GMT+0500 (Pakistan Standard Time)');

console.log(formatDateMMDDYYYY(testDate)); 
// Expected Output: Formatted Date (MM/DD/YYYY): 9/27/2024

console.log(formatDateLong(testDate));     
// Expected Output: Formatted Date (Month Day, Year): September 27, 2024