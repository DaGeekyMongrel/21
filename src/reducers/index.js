import {
  GAME_START,
  CARDS_SHUFFLE,
  CARDS_DEAL,
  GAME_RESET,
  GAME_END,
  WINNER_SET,
} from '../actions/types';
import { deck } from '../utils/cards';

const initialState = {
  deck: deck,
  playerHand: [],
  houseHand: [],
  inProgress: false,
  winner: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CARDS_DEAL:
      const recipient = `${action.payload}Hand`;

      return {
        ...state,
        deck: state.deck.slice(1),
        [recipient]: [...state[recipient], ...state.deck.slice(0, 1)],
      };

    case CARDS_SHUFFLE:
      return {
        ...state,
        deck: action.payload,
      };

    case GAME_END:
      return {
        ...state,
        inProgress: false,
      };

    case GAME_RESET:
      return initialState;

    case GAME_START:
      return {
        ...state,
        inProgress: true,
      };

    case WINNER_SET:
      return {
        ...state,
        winner: action.payload,
      };

    default:
      return state;
  }
}
