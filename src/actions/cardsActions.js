import { CARDS_DEAL, CARDS_RESET, CARDS_SHUFFLE } from './types';

export const shuffleCards = () => ({
  type: CARDS_SHUFFLE,
});

export const dealTo = (recipient) => ({
  type: CARDS_DEAL,
  payload: recipient,
});

export const resetCards = () => ({
  type: CARDS_RESET,
});
