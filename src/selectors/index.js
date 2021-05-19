import { HOUSE, PLAYER } from '../constants';
import { getPoints } from '../utils';

export const getPlayerHand = (state) => state.cards[PLAYER];
export const getHouseHand = (state) => state.cards[HOUSE];

export const getPlayerPoints = (state) => getPoints(state.cards[PLAYER]);
export const getHousePoints = (state) => getPoints(state.cards[HOUSE]);
