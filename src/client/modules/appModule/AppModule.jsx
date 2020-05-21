import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../../../common/routes';
import '../../styles/base.less';

const AppModule = ({ history }) => {
  console.log('history', history);
  return (
    <ConnectedRouter history={history}>
      <Switch>{renderRoutes(routes)}</Switch>
    </ConnectedRouter>
  );
};

AppModule.propTypes = {
  history: PropTypes.shape().isRequired,
};

// export default AppModule;

export default hot(module)(AppModule);
