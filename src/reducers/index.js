import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import gameReducer from './gameReducer';

export default combineReducers({
  cards: cardsReducer,
  game: gameReducer,
});
