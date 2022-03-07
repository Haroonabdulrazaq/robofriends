import { CHANGESEARCHFIELD } from './constants';

export const setSearchField =(text) => ({
  type: CHANGESEARCHFIELD,
  payload: text,
})