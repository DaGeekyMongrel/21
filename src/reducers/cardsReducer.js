import { CARDS_DEAL, CARDS_INIT } from '../actions/types';
import { deck, shuffle } from '../utils/cards';

const initialState = {
  deck,
  house: [],
  player: [],
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case CARDS_DEAL:
      const recipient = action.payload;
      const nextCard = [...state.deck.slice(0, 1)][0];

      return {
        ...state,
        deck: state.deck.slice(1),
        [recipient]: [...state[recipient], nextCard],
      };

    case CARDS_INIT:
      return {
        ...initialState,
        deck: shuffle(state.deck),
      };
    default:
      return state;
  }
}
