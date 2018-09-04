export const setHeroAction = payload => ({
  type: 'SET_HERO',
  payload
});

export const removeHeroAction = index => ({
  type: 'REMOVE_HERO',
  index
});

export const getHeroesAction = payload => ({
  type: 'GET_HEROES',
  payload
});
