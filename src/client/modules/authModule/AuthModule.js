import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { Row, Col, Divider, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../../../common/constants/configConstants';
import * as selectors from './selectors';
import * as actions from './actions';

const AuthModule = () => {
  const isAuthenticated = useSelector(selectors.getIsAuthenticated);
  // const ownProfile = useSelector(selectors.getOwnProfile);

  const dispatch = useDispatch();

  const loginUser = response => {
    console.log('response', response);

    const token = get(response, 'accessToken', '');
    const profile = get(response, 'profileObj', {});

    dispatch(actions.login(token, profile));
  };

  const logoutUser = () => {
    console.log('logoutUser');
  };

  return (
    <Row>
      <Col flex="120px">
        {isAuthenticated && (
          <>
            <i className="icon user-icon">
              <UserOutlined />
            </i>
            Name user
          </>
        )}
      </Col>

      <Divider type="vertical" className="Header__divider" />

      <Col flex="80px">
        {!isAuthenticated ? (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            render={renderProps => <Button onClick={renderProps.onClick}>Log In</Button>}
            buttonText="Login"
            onSuccess={loginUser}
            onFailure={({ error }) => {
              console.error(`Google OAuth Error: ${error}`);
            }}
            cookiePolicy={'single_host_origin'}
          />
        ) : (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            render={renderProps => <Button onClick={renderProps.onClick}>Log Out</Button>}
            buttonText="Logout"
            onLogoutSuccess={logoutUser}
          />
        )}
      </Col>
    </Row>
  );
};

export default AuthModule;
