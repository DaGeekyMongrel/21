import { dealTo, initCards } from './cardsActions';
import { HOUSE, PLAYER } from '../constants';
import {
  GAME_END,
  GAME_RESET,
  GAME_START,
  MESSAGE_SET,
  WINNER_SET,
} from './types';
import { getHousePoints, getPlayerPoints, selectWinner } from '../selectors';

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
  if (getPlayerPoints(getState()) >= 21) dispatch(endGame());
};

export const finalDeal = () => (dispatch, getState) => {
  while (getHousePoints(getState()) < 17) {
    dispatch(dealTo(HOUSE));
  }
};

export const startGame = () => (dispatch, getState) => {
  dispatch({
    type: GAME_START,
  });

  dispatch(initCards());

  // Deal 2 cards for both the house and the player
  for (let i = 0; i < 2; i++) {
    dispatch(dealTo(PLAYER));
    dispatch(dealTo(HOUSE));
  }

  if (getPlayerPoints(getState()) === 21) dispatch(endGame());
};

export const endGame = () => (dispatch, getState) => {
  dispatch(finalDeal());

  const state = getState();

  const winner = selectWinner(state);

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
