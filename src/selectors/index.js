import { HOUSE, PLAYER } from '../constants';
import { getPoints } from '../utils';

export const getPlayerHand = (state) => state.cards[PLAYER];
export const getHouseHand = (state) => state.cards[HOUSE];

export const getPlayerPoints = (state) => getPoints(state.cards[PLAYER]);
export const getHousePoints = (state) => getPoints(state.cards[HOUSE]);

export const hasBlackjack = (state) => {
  const playerHand = getPlayerHand(state);
  const houseHand = getHouseHand(state);
  const playerPoints = getPlayerPoints(state);
  const housePoints = getHousePoints(state);

  return (
    playerPoints === 21 &&
    playerHand.length === 2 &&
    (housePoints !== 21 || houseHand.length > 2)
  );
};

export const didBust = (state) => getPlayerPoints(state) > 21;

export const selectWinner = (state) => {
  const playerPoints = getPlayerPoints(state);
  const housePoints = getHousePoints(state);

  // Player blackjack
  if (hasBlackjack(state)) return PLAYER;

  // Player bust
  if (didBust(state)) return HOUSE;

  // House busts
  if (housePoints > 21) return PLAYER;

  // Push
  if (housePoints === playerPoints) return null;

  // Both has >= 21, more wins
  return housePoints > playerPoints ? HOUSE : PLAYER;
};
