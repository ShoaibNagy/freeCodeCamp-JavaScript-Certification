function repeatStringNumTimes(string, number) {
  if (number <= 0) return "";

  let repeatedString = "";
  for(let i = 0; i < number; i++) {
    repeatedString += string;
  }
  return repeatedString;
}