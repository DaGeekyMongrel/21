import { HOUSE, PLAYER } from '../constants';
import { calcHand, calculateWinner, deck, shuffle } from '../utils/cards';
import {
  CARDS_SHUFFLE,
  CARDS_DEAL,
  GAME_START,
  GAME_RESET,
  GAME_END,
  WINNER_SET,
} from './types';

export const shuffleCards = () => ({
  type: CARDS_SHUFFLE,
  payload: shuffle(deck),
});

export const dealCard = (recipient) => ({
  type: CARDS_DEAL,
  payload: recipient,
});

export const startGame = () => (dispatch, getState) => {
  if (getState().winner !== null) dispatch(resetGame());

  dispatch({
    type: GAME_START,
  });

  dispatch(shuffleCards());

  // Deal 2 cards for both the house and the player
  for (let i = 0; i < 2; i++) {
    [HOUSE, PLAYER].forEach((recipient) => {
      dispatch(dealCard(recipient));
    });
  }
};

export const resetGame = () => ({
  type: GAME_RESET,
});

export const endGame = () => (dispatch, getState) => {
  let { houseHand, playerHand } = getState();

  while (calcHand(houseHand) < 17) {
    dispatch(dealCard(HOUSE));
    houseHand = getState().houseHand;
  }

  const winner = calculateWinner(houseHand, playerHand);

  dispatch(setWinner(winner));

  dispatch({
    type: GAME_END,
  });
};

export const setWinner = (winner) => ({
  type: WINNER_SET,
  payload: winner,
});
