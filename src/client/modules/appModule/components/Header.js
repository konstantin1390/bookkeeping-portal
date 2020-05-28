import React, { memo } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom';
import AuthModule from '../../authModule/AuthModule';

const HeaderContent = () => {
  return (
    <Row>
      <Col flex="180px">
        <Link to="/">Logo</Link>
      </Col>
      <Divider type="vertical" className="Header__divider" />
      <Col flex="auto">Client portal</Col>
      <Col flex="220px">
        <AuthModule />
      </Col>
    </Row>
  );
};

export default memo(HeaderContent);
