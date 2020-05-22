import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppModule from '../appModule/appModule';
import { getHistory } from '../../../roots/storeCreator';
import { Route, Router } from 'react-router-dom';
import store from '../../../roots/storeCreator';

class RootModule extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={getHistory()}>
          asd
          <Route path="/">
            <AppModule />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default RootModule;
