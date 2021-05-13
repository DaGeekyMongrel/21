import { deck, shuffle } from '../utils/cards';
import { CARDS_SHUFFLE, CARDS_DEAL } from './types';

export const shuffleCards = () => (dispatch) => {
  dispatch({
    type: CARDS_SHUFFLE,
    payload: shuffle(deck),
  });
};

export const dealCards = (count) => (dispatch) => {
  dispatch({
    type: CARDS_DEAL,
    payload: count,
  });
};

export const startGame = () => {
  dealCards(2);
};
