let count = 0;

function cardCounter(card) {
  if(card < 0 || card > 13) {
    return "INVALID CARD NUMBER!";
  }
  if (card < 2 && card > 10) {
    switch(card) {
      case 1:
        card = 'A';
        break;
      case 11:
        card = 'J';
        break;
      case 12:
        card = 'Q';
        break;
      case 13:
        card = 'K';
        break;
    }
  }

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  
  return count > 0 ? `${count} Bet` : `${count} Hold`;
}

console.log(cardCounter(4)); 