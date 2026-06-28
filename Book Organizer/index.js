// 1-6. Create the books array with at least three objects containing title, authorName, and releaseYear
const books = [
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  },
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960
  },
  {
    title: "Dune",
    authorName: "Frank Herbert",
    releaseYear: 1965
  }
];

// 2-3. Define the sortByYear callback function
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

// 7-10. Filter out books written after 1950 (keeping books released on or before 1950)
const filteredBooks = books.filter(book => book.releaseYear <= 1950);

// 11. Sort the filteredBooks array in place using the sortByYear callback
filteredBooks.sort(sortByYear);

// ==========================================
// Example Usage / Testing the Code
// ==========================================
console.log("Filtered and Sorted Books:");
console.log(filteredBooks);