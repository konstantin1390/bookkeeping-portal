import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppModule from '../appModule/appModule';
import storeConfiguration, { getHistory } from '../../../roots/storeCreator';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import '../../../common/styles/base.less';

const store = storeConfiguration;

class RootModule extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={getHistory()}>
          <Switch>
            <Route path="/">
              <AppModule />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default RootModule;
