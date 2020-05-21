'use strict';
import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { createHistory } from '../common/helpers/history';

export default function createRouterStore(currUrl, historyPassed) {
  console.log('createRouterStore');
  const history = historyPassed || createHistory(currUrl);

  const sagaMiddleware = createSagaMiddleware({
    onError: error => {
      alert('Critical error acquired! See console for more details.');
      console.error(error);
      sagaMiddleware.run(rootSaga);
    },
  });
  const middleware = [sagaMiddleware, routerMiddleware(history)];

  const preloadedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
