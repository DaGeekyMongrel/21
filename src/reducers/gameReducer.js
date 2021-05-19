import { GAME_START, GAME_END } from '../actions/types';

const initialState = {
  inProgress: false,
  msg: '',
};

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case GAME_END:
      return {
        ...state,
        inProgress: false,
        msg: action.payload,
      };

    case GAME_START:
      return {
        ...state,
        inProgress: true,
        msg: '',
      };

    default:
      return state;
  }
}
