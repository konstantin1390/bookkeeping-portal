import { combineReducers } from 'redux';
import appReducer from '../client/modules/appModule/appReducer';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
