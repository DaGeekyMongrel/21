import { CARDS_SHUFFLE, CARDS_DEAL } from '../actions/types';
import { deck } from '../utils/cards';

const initialState = {
  deck: deck,
  hand: [],
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case CARDS_SHUFFLE:
      return {
        ...state,
        deck: action.payload,
      };
    case CARDS_DEAL:
      return {
        ...state,
        deck: state.deck.slice(action.payload),
        hand: [...state.hand, ...state.deck.slice(0, action.payload)],
      };
    default:
      return state;
  }
}
