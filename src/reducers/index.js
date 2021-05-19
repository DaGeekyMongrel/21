import {
  GAME_START,
  CARDS_SHUFFLE,
  CARDS_DEAL,
  GAME_RESET,
  GAME_END,
  WINNER_SET,
  MESSAGE_SET,
  CARDS_RESET,
} from '../actions/types';
import { deck, getPoints, shuffle } from '../utils/cards';

const initialState = {
  deck: deck,
  player: {
    hand: [],
    points: 0,
    wins: 0,
  },
  house: {
    hand: [],
    points: 0,
    wins: 0,
  },
  rounds: 0,
  inProgress: false,
  msg: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CARDS_DEAL:
      const recipient = action.payload;
      const nextCard = [...state.deck.slice(0, 1)][0];
      const nextHand = [...state[recipient].hand, nextCard];

      const changes = {
        [recipient]: {
          ...state[recipient],
          hand: nextHand,
          points: getPoints(nextHand),
        },
        deck: state.deck.slice(1),
      };

      return {
        ...state,
        ...changes,
      };

    case CARDS_SHUFFLE:
      return {
        ...state,
        deck: shuffle(state.deck),
      };

    case CARDS_RESET:
      return {
        ...state,
        player: {
          ...state.player,
          hand: [],
        },
        house: {
          ...state.house,
          hand: [],
        },
      };

    case GAME_END:
      return {
        ...state,
        inProgress: false,
        rounds: state.rounds + 1,
      };

    case GAME_RESET:
      return {
        ...state,
        player: {
          ...state.player,
          points: 0,
        },
        house: {
          ...state.house,
          points: 0,
        },
        inProgress: false,
        msg: '',
      };

    case GAME_START:
      return {
        ...state,
        inProgress: true,
      };

    case WINNER_SET:
      const winner = action.payload;

      return {
        ...state,
        [winner]: { ...state[winner], wins: state[winner].wins + 1 },
      };

    case MESSAGE_SET:
      return {
        ...state,
        msg: action.payload,
      };

    default:
      return state;
  }
}
