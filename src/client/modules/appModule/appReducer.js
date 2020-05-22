const initialState = {
  usedLocale: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USED_LOCALE_STORE':
      return {
        ...state,
        usedLocale: action.payload,
      };

    default: {
      return state;
    }
  }
};
