import { CARDS_DEAL, CARDS_INIT } from './types';

export const dealTo = (recipient) => ({
  type: CARDS_DEAL,
  payload: recipient,
});

export const initCards = () => ({
  type: CARDS_INIT,
});
