import "@babel/polyfill";
import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const storeConfiguration = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
//sagaMiddleware.run(rootSaga);
export default storeConfiguration;

let history = null;

export const getHistory = () => {
  if (!history) {
    history = createBrowserHistory();
  }

  return history;
};
