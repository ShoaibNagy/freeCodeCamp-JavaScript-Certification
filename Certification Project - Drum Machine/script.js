// Mapping of keys to drum pad descriptions
const drumDescriptions = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open HH",
  Z: "Kick n' Hat",
  X: "Kick",
  C: "Closed HH"
};

// Get all drum pads
const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

// Function to play sound and update display
function playSound(pad) {
  const audio = pad.querySelector("audio");
  const key = pad.getAttribute("data-key");
  
  // Reset audio to beginning
  audio.currentTime = 0;
  
  // Play the sound
  audio.play();
  
  // Update display with description
  display.textContent = drumDescriptions[key];
  
  // Add active class for visual feedback
  pad.classList.add("active");
  setTimeout(() => {
    pad.classList.remove("active");
  }, 100);
}

// Add click event listeners to all drum pads
drumPads.forEach(pad => {
  pad.addEventListener("click", () => {
    playSound(pad);
  });
});

// Add keyboard event listener
document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  
  // Check if the pressed key is one of our drum pad keys
  if (drumDescriptions.hasOwnProperty(key)) {
    const pad = document.querySelector(`.drum-pad[data-key="${key}"]`);
    if (pad) {
      playSound(pad);
    }
  }
});