const year = 1100;

function isLeapYear(year) {
  if (typeof year !== "number") {
    return `${year} is not a leap year.`;
  }

  if (year % 100 === 0 && year % 400 === 0) {
    return `${year} is a leap year.`;
  }
  else if (year % 100 !== 0 && year % 4 === 0) return `${year} is a leap year.`;
  else return `${year} is not a leap year.`;
}

let result = isLeapYear(year);
console.log(result);