import {
  GAME_START,
  GAME_RESET,
  GAME_END,
  WINNER_SET,
  MESSAGE_SET,
} from '../actions/types';

const initialState = {
  player: {
    wins: 0,
  },
  house: {
    wins: 0,
  },
  rounds: 0,
  inProgress: false,
  msg: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GAME_END:
      return {
        ...state,
        inProgress: false,
        rounds: state.rounds + 1,
      };

    case GAME_RESET:
      return {
        ...state,
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
