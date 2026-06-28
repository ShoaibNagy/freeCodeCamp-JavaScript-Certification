const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    { name: "Sergio Almirón", position: "forward", isCaptain: false },
    { name: "Sergio Batista", position: "midfielder", isCaptain: false },
    { name: "Ricardo Bochini", position: "midfielder", isCaptain: false },
    { name: "Claudio Borghi", position: "midfielder", isCaptain: false },
    { name: "José Luis Brown", position: "defender", isCaptain: false },
    { name: "Jorge Burruchaga", position: "forward", isCaptain: false },
    { name: "Néstor Clausen", position: "defender", isCaptain: false },
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "José Luis Cuciuffo", position: "defender", isCaptain: false },
    { name: "Héctor Enrique", position: "midfielder", isCaptain: false },
    { name: "Oscar Garré", position: "defender", isCaptain: false },
    { name: "Ricardo Giusti", position: "midfielder", isCaptain: false },
    { name: "Luis Islas", position: "goalkeeper", isCaptain: false },
    { name: "Julio Olarticoechea", position: "defender", isCaptain: false },
    { name: "Daniel Passarella", position: "defender", isCaptain: false },
    { name: "Pedro Pasculli", position: "forward", isCaptain: false },
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
    { name: "Carlos Tapia", position: "midfielder", isCaptain: false },
    { name: "Jorge Valdano", position: "forward", isCaptain: false },
    { name: "Marcelo Trobbiani", position: "midfielder", isCaptain: false },
    { name: "Héctor Zelada", position: "goalkeeper", isCaptain: false }
  ]
};

// Display team stats
document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;

// Function to create player cards
function createPlayerCards(players) {
  const playerCardsDiv = document.getElementById("player-cards");
  playerCardsDiv.innerHTML = "";
  
  players.forEach(player => {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");
    
    const playerName = document.createElement("h2");
    // Add "(Captain)" prefix if the player is the captain
    playerName.textContent = player.isCaptain ? `(Captain) ${player.name}` : player.name;
    
    const playerPosition = document.createElement("p");
    playerPosition.textContent = `Position: ${player.position}`;
    
    playerCard.appendChild(playerName);
    playerCard.appendChild(playerPosition);
    playerCardsDiv.appendChild(playerCard);
  });
}

// Filter function
function filterPlayers() {
  const playersSelect = document.getElementById("players");
  const selectedPosition = playersSelect.value;
  
  if (selectedPosition === "all") {
    createPlayerCards(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      player => player.position === selectedPosition
    );
    createPlayerCards(filteredPlayers);
  }
}

// Display all players initially
filterPlayers();

// Add event listeners for both change and input events
const playersSelect = document.getElementById("players");
playersSelect.addEventListener("change", filterPlayers);
playersSelect.addEventListener("input", filterPlayers);