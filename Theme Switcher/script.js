const themes = [
  { name: "light", message: "Hello sunshine — Light theme is on!" },
  { name: "dark", message: "The night is yours — Dark theme is on!" },
  { name: "ocean", message: "Blue skies and high tides — Ocean theme is on!" },
  { name: "nord", message: "The frost has settled - Nord theme is on!" }
];

const themeSwitcherButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const statusElement = document.getElementById("status");
const themeItems = document.querySelectorAll("#theme-dropdown li");

let currentTheme = null;

// Toggle dropdown menu
themeSwitcherButton.addEventListener("click", function() {
  const isExpanded = this.getAttribute("aria-expanded") === "true";
  
  if (isExpanded) {
    // Close the dropdown
    themeDropdown.setAttribute("hidden", "");
    this.setAttribute("aria-expanded", "false");
  } else {
    // Open the dropdown
    themeDropdown.removeAttribute("hidden");
    this.setAttribute("aria-expanded", "true");
  }
});

// Handle theme selection
themeItems.forEach(item => {
  item.addEventListener("click", function() {
    const themeName = this.id.replace("theme-", "");
    
    // Remove previous theme class
    if (currentTheme) {
      document.body.classList.remove(`theme-${currentTheme}`);
    }
    
    // Add new theme class
    document.body.classList.add(`theme-${themeName}`);
    currentTheme = themeName;
    
    // Find and display the message
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      statusElement.textContent = theme.message;
    }
    
    // Close the dropdown
    themeDropdown.setAttribute("hidden", "");
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", function(event) {
  if (!themeSwitcherButton.contains(event.target) && !themeDropdown.contains(event.target)) {
    themeDropdown.setAttribute("hidden", "");
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  }
});