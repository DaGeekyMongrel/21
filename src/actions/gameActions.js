import { dealCards, resetCards, shuffleCards } from './cardsActions';
import { GAME_START } from './types';

export const startGame = () => (dispatch) => {
  dispatch({
    type: GAME_START,
  });
  dispatch(resetCards());
  dispatch(shuffleCards());
  dispatch(dealCards(2));
};
