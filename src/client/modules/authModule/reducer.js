import ActionTypes from '../../../common/constants/actionTypes';

const initialState = {
  isAuthenticated: false,
  profile: {
    imageUrl: '',
    email: '',
    name: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
      };

    default: {
      return state;
    }
  }
};
