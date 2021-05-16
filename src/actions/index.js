import { calculateValues, deck, shuffle } from '../utils/cards';
import {
  CARDS_SHUFFLE,
  CARDS_DEAL,
  GAME_START,
  GAME_RESET,
  GAME_END,
} from './types';

export const shuffleCards = () => ({
  type: CARDS_SHUFFLE,
  payload: shuffle(deck),
});

export const dealCard = (recipient) => ({
  type: CARDS_DEAL,
  payload: recipient,
});

export const startGame = () => (dispatch) => {
  dispatch({
    type: GAME_START,
  });

  dispatch(shuffleCards());

  // Deal 2 cards for both the house and the player
  for (let i = 0; i < 2; i++) {
    ['house', 'player'].forEach((recipient) => {
      dispatch(dealCard(recipient));
    });
  }
};

export const resetGame = () => ({
  type: GAME_RESET,
});

export const endGame = () => (dispatch, getState) => {
  while (calculateValues(getState().houseHand) < 17) {
    dispatch(dealCard('house'));
  }

  dispatch({
    type: GAME_END,
  });
};
