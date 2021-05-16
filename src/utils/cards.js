const suits = ['diamonds', 'clubs', 'hearts', 'spades'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

const deck = suits.reduce((cards, suit) => {
  values.forEach((value, rank) => cards.push({ rank, suit, value }));
  return cards;
}, []);

// Fisher - Yates
const shuffle = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const deal = (deck, playersCount) => {
  const hands = new Array(playersCount).fill([]);
  const cardsPerHand = deck.length / playersCount / 2;

  for (let i = 0; i < playersCount * 2; i++) {
    hands[i % hands.length] = hands[i % hands.length].concat(
      deck.splice(0, cardsPerHand)
    );
  }

  return hands;
};

const calcHand = (hand) => hand.reduce((acc, card) => acc + card.value, 0);

const calculateWinner = (houseHand, playerHand) => {
  const housePoints = calcHand(houseHand);
  const playerPoints = calcHand(playerHand);

  if (playerPoints > 21) return 'house';

  if (
    playerPoints === 21 &&
    playerHand.length === 2 &&
    (housePoints !== 21 || houseHand.length > 2)
  )
    return 'player';

  if (housePoints > 21) return 'player';

  if (housePoints === playerPoints) return 'push';

  return housePoints > playerPoints ? 'house' : 'player';
};

module.exports = {
  suits,
  values,
  deck,
  shuffle,
  deal,
  calcHand,
  calculateWinner,
};
