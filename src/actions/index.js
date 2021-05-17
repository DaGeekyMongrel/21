import { HOUSE, PLAYER } from '../constants';
import { calculateWinner, deck, shuffle } from '../utils/cards';
import {
  CARDS_SHUFFLE,
  CARDS_DEAL,
  GAME_START,
  GAME_RESET,
  GAME_END,
  WINNER_SET,
  MESSAGE_SET,
} from './types';

export const shuffleCards = () => ({
  type: CARDS_SHUFFLE,
  payload: shuffle(deck),
});

export const dealCard = (recipient) => ({
  type: CARDS_DEAL,
  payload: recipient,
});

export const hit = () => (dispatch, getState) => {
  dispatch(dealCard(PLAYER));
  if (getState().player.points >= 21) dispatch(endGame());
};

export const startGame = () => (dispatch, getState) => {
  if (getState().rounds !== 0) dispatch(resetGame());

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

  if (getState().player.points === 21) dispatch(endGame());
};

export const resetGame = () => ({
  type: GAME_RESET,
});

export const endGame = () => (dispatch, getState) => {
  let { house, player } = getState();

  while (house.points < 17) {
    dispatch(dealCard(HOUSE));
    house = getState().house;
  }

  const winner = calculateWinner(house, player);

  if (winner) {
    dispatch(setWinner(winner));
    dispatch(setMessage(`${winner} wins!`));
  } else {
    dispatch(setMessage('Push'));
  }

  dispatch({
    type: GAME_END,
  });
};

export const setWinner = (winner) => ({
  type: WINNER_SET,
  payload: winner,
});

export const setMessage = (msg) => ({
  type: MESSAGE_SET,
  payload: msg,
});
