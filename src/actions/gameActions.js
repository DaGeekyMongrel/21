import { dealTo, initCards } from './cardsActions';
import { HOUSE, PLAYER } from '../constants';
import {
  GAME_END,
  GAME_RESET,
  GAME_START,
  MESSAGE_SET,
  WINNER_SET,
} from './types';
import { calculateWinner, getPoints } from '../utils/cards';

export const resetGame = () => ({
  type: GAME_RESET,
});

export const setMessage = (msg) => ({
  type: MESSAGE_SET,
  payload: msg,
});

export const setWinner = (winner) => ({
  type: WINNER_SET,
  payload: winner,
});

export const hit = () => (dispatch, getState) => {
  dispatch(dealTo(PLAYER));
  if (getPoints(getState().cards.player) >= 21) dispatch(endGame());
};

export const finalDeal = () => (dispatch, getState) => {
  const getHousePoints = () => getPoints(getState().cards.house);

  while (getHousePoints() < 17) {
    dispatch(dealTo(HOUSE));
  }
};

export const startGame = () => (dispatch, getState) => {
  if (getState().game.rounds !== 0) {
    dispatch(resetGame());
  }

  dispatch({
    type: GAME_START,
  });

  dispatch(initCards());

  // Deal 2 cards for both the house and the player
  for (let i = 0; i < 2; i++) {
    dispatch(dealTo(PLAYER));
    dispatch(dealTo(HOUSE));
  }

  if (getPoints(getState().cards.player) === 21) dispatch(endGame());
};

export const endGame = () => (dispatch, getState) => {
  dispatch(finalDeal());

  const { house, player } = getState().cards;

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
