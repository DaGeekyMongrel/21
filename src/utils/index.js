const suits = ['diamonds', 'clubs', 'hearts', 'spades'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const ranks = {
  ace: 12,
};

export const deck = suits.reduce((cards, suit) => {
  values.forEach((value, rank) => cards.push({ rank, suit, value }));
  return cards;
}, []);

export const getPoints = (hand) => {
  let points = hand.reduce((acc, card) => acc + card.value, 0);
  let numOfAces = hand.filter((el) => el.rank === ranks.ace).length;

  while (points > 21 && numOfAces > 0) {
    points -= 10;
    numOfAces--;
  }

  return points;
};

// Fisher - Yates
export const shuffle = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};
