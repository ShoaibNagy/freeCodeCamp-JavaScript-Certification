// 1. Function to get bookmarks from local storage
const getBookmarks = () => {
  const bookmarks = localStorage.getItem('bookmarks');
  if (!bookmarks) return [];
  try {
    const parsed = JSON.parse(bookmarks);
    if (Array.isArray(parsed)) {
      const isValid = parsed.every(item =>
        item !== null &&
        typeof item === 'object' &&
        !Array.isArray(item) &&
        'name' in item &&
        'category' in item &&
        'url' in item
      );

      if (isValid) {
        return parsed;
      }
    }
    return [];
  } catch (e) {
    return [];
  }
};

// 2. Function to toggle visibility between main section and form section
const displayOrCloseForm = () => {
  document.getElementById('main-section').classList.toggle('hidden');
  document.getElementById('form-section').classList.toggle('hidden');
};

// 3. Function to toggle visibility between main section and bookmark list section
const displayOrHideCategory = () => {
  document.getElementById('main-section').classList.toggle('hidden');
  document.getElementById('bookmark-list-section').classList.toggle('hidden');
};

// Event Listener: Add Bookmark Button (Main Section)
document.getElementById('add-bookmark-button').addEventListener('click', () => {
  const categoryDropdown = document.getElementById('category-dropdown');
  const selectedValue = categoryDropdown.value;

  // Update all elements with class 'category-name'
  document.querySelectorAll('.category-name').forEach(el => {
    el.textContent = selectedValue;
  });

  displayOrCloseForm();
});

// Event Listener: Close Form Button
document.getElementById('close-form-button').addEventListener('click', () => {
  displayOrCloseForm();
});

// Event Listener: Add Bookmark Button (Form Section)
document.getElementById('add-bookmark-button-form').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const url = document.getElementById('url').value;
  const categoryDropdown = document.getElementById('category-dropdown');
  const category = categoryDropdown.value;

  // Get current bookmarks, add new one, and save to local storage
  const bookmarks = getBookmarks();
  bookmarks.push({ name, category, url });
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Reset input fields
  document.getElementById('name').value = '';
  document.getElementById('url').value = '';

  displayOrCloseForm();
});

// Event Listener: View Category Button
document.getElementById('view-category-button').addEventListener('click', () => {
  const categoryDropdown = document.getElementById('category-dropdown');
  const selectedValue = categoryDropdown.value;

  // Update all elements with class 'category-name'
  document.querySelectorAll('.category-name').forEach(el => {
    el.textContent = selectedValue;
  });

  // Filter bookmarks by selected category
  const bookmarks = getBookmarks();
  const filteredBookmarks = bookmarks.filter(b => b.category === selectedValue);

  const categoryList = document.getElementById('category-list');
  categoryList.innerHTML = ''; // Clear previous entries to prevent duplication

  if (filteredBookmarks.length === 0) {
    categoryList.innerHTML = '<p>No Bookmarks Found</p>';
  } else {
    filteredBookmarks.forEach(b => {
      // Create radio button and label with anchor
      const radioId = b.name;
      const html = `
        <input type="radio" id="${radioId}" name="bookmark" value="${radioId}">
        <label for="${radioId}"><a href="${b.url}">${b.name}</a></label>
      `;
      categoryList.innerHTML += html;
    });
  }

  displayOrHideCategory();
});

// Event Listener: Close List Button
document.getElementById('close-list-button').addEventListener('click', () => {
  displayOrHideCategory();
});

// Event Listener: Delete Bookmark Button
document.getElementById('delete-bookmark-button').addEventListener('click', () => {
  const selectedRadio = document.querySelector('input[name="bookmark"]:checked');

  if (selectedRadio) {
    const nameToDelete = selectedRadio.value;
    const categoryValue = document.getElementById('category-dropdown').value;

    // Filter out the deleted bookmark and update local storage
    let bookmarks = getBookmarks();
    bookmarks = bookmarks.filter(b => !(b.name === nameToDelete && b.category === categoryValue));
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Update the displayed bookmark list by re-triggering the view category logic
    document.getElementById('view-category-button').click();
  }
});