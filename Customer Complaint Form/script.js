// 1. Validate Form Function
function validateForm() {
  const fullName = document.getElementById('full-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const orderNo = document.getElementById('order-no').value.trim();
  const productCode = document.getElementById('product-code').value.trim();
  const quantity = document.getElementById('quantity').value.trim();

  const complaintsChecked = document.querySelectorAll('#complaints-group input[type="checkbox"]:checked').length > 0;
  const otherComplaintChecked = document.getElementById('other-complaint').checked;
  const complaintDesc = document.getElementById('complaint-description').value;

  const solutionsChecked = document.querySelectorAll('#solutions-group input[type="radio"]:checked').length > 0;
  const otherSolutionChecked = document.getElementById('other-solution').checked;
  const solutionDesc = document.getElementById('solution-description').value;

  return {
    'full-name': fullName.length > 0,
    'email': /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    'order-no': /^2024\d{6}$/.test(orderNo),
    'product-code': /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(productCode),
    'quantity': /^[1-9]\d*$/.test(quantity),
    'complaints-group': complaintsChecked,
    'complaint-description': !otherComplaintChecked || complaintDesc.length >= 20,
    'solutions-group': solutionsChecked,
    'solution-description': !otherSolutionChecked || solutionDesc.length >= 20
  };
}

// 2. Is Valid Function
function isValid(validationObj) {
  return Object.values(validationObj).every(val => val === true);
}

// Helper Function to Update UI Border Colors
function updateFieldUI(fieldId, isValid) {
  const el = document.getElementById(fieldId);
  if (!el) return;

  // Set border color to green if valid, red if invalid
  el.style.borderColor = isValid ? 'green' : 'red';
}

// 3. Event Listeners for Real-time Validation on 'change'
// Text inputs and textareas
const textFields = ['full-name', 'email', 'order-no', 'product-code', 'quantity', 'complaint-description', 'solution-description'];
textFields.forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    // Using both 'change' and 'input' to ensure immediate feedback as the user types or leaves the field
    el.addEventListener('change', () => {
      const validation = validateForm();
      updateFieldUI(id, validation[id]);
    });
    el.addEventListener('input', () => {
      const validation = validateForm();
      updateFieldUI(id, validation[id]);
    });
  }
});

// Checkboxes (Complaints Group)
const checkboxes = document.querySelectorAll('#complaints-group input[type="checkbox"]');
checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    const validation = validateForm();
    // Update the fieldset border color
    updateFieldUI('complaints-group', validation['complaints-group']);
    // Also update the conditional textarea in case 'Other' was checked/unchecked
    updateFieldUI('complaint-description', validation['complaint-description']);
  });
});

// Radio Buttons (Solutions Group)
const radios = document.querySelectorAll('#solutions-group input[type="radio"]');
radios.forEach(rb => {
  rb.addEventListener('change', () => {
    const validation = validateForm();
    // Update the fieldset border color
    updateFieldUI('solutions-group', validation['solutions-group']);
    // Also update the conditional textarea in case 'Other' was selected
    updateFieldUI('solution-description', validation['solution-description']);
  });
});

// 4. Form Submission Handling
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent actual form submission

  const validation = validateForm();

  // If the form is invalid, highlight all invalid fields in red
  if (!isValid(validation)) {
    for (const [key, value] of Object.entries(validation)) {
      if (!value) {
        updateFieldUI(key, false);
      }
    }
  }
});