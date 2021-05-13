import { CARDS_SHUFFLE, CARDS_DRAW } from '../actions/types';
import { deck } from '../utils/cards';

const initialState = {
  deck: deck,
};

export default function cardsReducer(state = initialState, action) {
  //const { deck, hand } = state;

  switch (action.type) {
    case CARDS_SHUFFLE:
      return {
        ...state,
        deck: action.payload,
      };
    case CARDS_DRAW:
      return {
        ...state,
        hand: action.payload,
      };
    default:
      return state;
  }
}
