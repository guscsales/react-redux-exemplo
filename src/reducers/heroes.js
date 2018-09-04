import { combineReducers } from 'redux';

export const list = (state = [], { type, payload, index }) => {
  switch (type) {
    case 'SET_HERO':
      return [...state, payload];
    case 'REMOVE_HERO':
      state.splice(index, 1);

      return [...state];
    case 'GET_HEROES':
      return payload.heroes;
    default:
      return state;
  }
};

export default combineReducers({
  list
});
