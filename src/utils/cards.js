const { HOUSE, PLAYER } = require('../constants');

const suits = ['diamonds', 'clubs', 'hearts', 'spades'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const ranks = {
  ace: 12,
};

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

const getPoints = (hand) => {
  let points = hand.reduce((acc, card) => acc + card.value, 0);
  let numOfAces = hand.filter((el) => el.rank === ranks.ace).length;

  while (points > 21 && numOfAces > 0) {
    points -= 10;
    numOfAces--;
  }

  return points;
};

const calculateWinner = (house, player) => {
  if (player.points > 21) return HOUSE;

  if (
    player.points === 21 &&
    player.hand.length === 2 &&
    (house.points !== 21 || house.hand.length > 2)
  )
    return PLAYER;

  if (house.points > 21) return PLAYER;

  if (house.points === player.points) return null;

  return house.points > player.points ? HOUSE : PLAYER;
};

module.exports = {
  suits,
  values,
  deck,
  shuffle,
  deal,
  getPoints,
  calculateWinner,
};
