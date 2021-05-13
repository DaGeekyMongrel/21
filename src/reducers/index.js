import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';
import gameStateReducer from './gameStateReducer';

export default combineReducers({
  cards: cardsReducer,
  gameState: gameStateReducer,
});
