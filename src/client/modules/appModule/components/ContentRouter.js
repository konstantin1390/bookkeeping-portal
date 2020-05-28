import React, { memo } from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../../../../common/routes';

const ContentRouter = () => <Switch>{renderRoutes(routes)}</Switch>;

export default withRouter(memo(ContentRouter));
