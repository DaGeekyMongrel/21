import { GAME_START } from '../actions/types';

const initialState = {
  started: false,
};

export default function gameStateReducer(state = initialState, action) {
  switch (action.type) {
    case GAME_START:
      return {
        ...state,
        started: true,
      };
    default:
      return state;
  }
}
