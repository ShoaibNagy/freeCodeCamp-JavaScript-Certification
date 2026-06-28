// 1. Initialize the poll variable to a new Map object
const poll = new Map();

// 2. Function to add an option to the poll
function addOption(option) {
  // Check for empty options
  if (!option || String(option).trim() === "") {
    return "Option cannot be empty.";
  }
  
  // Check if the option already exists
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }
  
  // Add the option with an empty Set to track voters
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

// 3. Function to handle voting
function vote(option, voterId) {
  // Check if the option exists in the poll
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  
  const voters = poll.get(option);
  
  // Check if the voter has already voted for this option
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  
  // Add the voter to the Set and return success message
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// 4. Function to display the poll results
function displayResults() {
  let results = "Poll Results:";
  
  // Iterate through the Map entries
  for (const [option, voters] of poll) {
    results += `\n${option}: ${voters.size} votes`;
  }
  
  return results;
}

// ==========================================
// Initial Setup to fulfill User Stories & Test 17
// (At least three options and at least three votes)
// ==========================================

addOption("Turkey");
addOption("Morocco");
addOption("Spain");

vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");