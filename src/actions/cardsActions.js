import { deck, shuffle } from '../utils/cards';
import { CARDS_SHUFFLE, CARDS_DRAW } from './types';

export const shuffleCards = () => (dispatch) => {
  dispatch({
    type: CARDS_SHUFFLE,
    payload: shuffle(deck),
  });
};
