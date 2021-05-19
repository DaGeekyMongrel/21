import { dealTo, initCards } from './cardsActions';
import { HOUSE, PLAYER, MESSAGES } from '../constants';
import { GAME_END, GAME_START } from './types';
import { getHousePoints, getPlayerPoints } from '../selectors';

const endGame = (message) => ({
  type: GAME_END,
  payload: message,
});

const startGame = () => ({
  type: GAME_START,
});

export const hit = () => (dispatch, getState) => {
  dispatch(dealTo(PLAYER));

  const playerPoints = getPlayerPoints(getState());

  // Bust
  if (playerPoints > 21) {
    dispatch(endGame(MESSAGES.bust));
  }

  if (playerPoints === 21) {
    dispatch(stand());
  }
};

export const newGame = () => (dispatch, getState) => {
  dispatch(startGame());
  dispatch(initCards());

  // Deal 2 cards for both the house and the player
  for (let i = 0; i < 2; i++) {
    dispatch(dealTo(PLAYER));
    dispatch(dealTo(HOUSE));
  }

  // Blackjack
  if (getPlayerPoints(getState()) === 21) {
    if (getHousePoints(getState()) === 21) {
      dispatch(endGame(MESSAGES.push));
    } else {
      dispatch(endGame(MESSAGES.blackjack));
    }
  }
};

export const stand = () => (dispatch, getState) => {
  while (getHousePoints(getState()) < 17) {
    dispatch(dealTo(HOUSE));
  }

  const housePoints = getHousePoints(getState());
  const playerPoints = getPlayerPoints(getState());

  if (housePoints > 21) {
    dispatch(endGame(MESSAGES.win));
    return;
  }

  if (housePoints > playerPoints) {
    dispatch(endGame(MESSAGES.loose));
    return;
  }

  if (housePoints < playerPoints) {
    dispatch(endGame(MESSAGES.win));
    return;
  }

  dispatch(endGame(MESSAGES.push));
};
