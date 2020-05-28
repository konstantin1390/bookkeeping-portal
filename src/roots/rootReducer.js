import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import appReducer from '../client/modules/appModule/appReducer';
import authReducer from '../client/modules/authModule/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export default rootReducer;
