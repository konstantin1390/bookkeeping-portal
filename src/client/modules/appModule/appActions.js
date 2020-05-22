export const setUsedLocaleStore = payload => ({ type: 'SET_USED_LOCALE_STORE', payload });

export const loadData = () => {
  return {
    type: 'LOAD_USERS_DATA',
  };
};
