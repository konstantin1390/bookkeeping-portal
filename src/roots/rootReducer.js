import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import AppReducer from '../client/modules/appModule/reducer';
// import testReducer from '../client/modules/testModule/reducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    app: AppReducer,
    // test: testReducer,
  });

export default createRootReducer;
