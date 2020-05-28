import React, { memo } from 'react';
import { Menu } from 'antd';
import { UnorderedListOutlined, InboxOutlined, MailOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const LeftNavBar = () => (
  <Menu defaultSelectedKeys={['file_box']}>
    <Menu.Item key="tasks">
      <NavLink to="/tasks">
        <i className="icon navbar-icon">
          <UnorderedListOutlined />
        </i>
        Tasks
      </NavLink>
    </Menu.Item>
    <Menu.Item key="file_box">
      <NavLink to="/file_box">
        <i className="icon navbar-icon">
          <InboxOutlined />
        </i>
        File Box
      </NavLink>
    </Menu.Item>
    <Menu.Item key="mail">
      <NavLink to="/mail">
        <i className="icon navbar-icon">
          <MailOutlined />
        </i>
        Mail
      </NavLink>
    </Menu.Item>
  </Menu>
);

export default memo(LeftNavBar);
