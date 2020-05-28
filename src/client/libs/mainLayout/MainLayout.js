import React from 'react';
import { Tabs } from 'antd';

const MainLayout = ({ titles, contents }) => {
  const { TabPane } = Tabs;

  return (
    <Tabs type="card">
      <TabPane tab={titles[0]} key={titles[0]}>
        {contents[0]}
      </TabPane>
      <TabPane tab={titles[1]} key={titles[1]}>
        {contents[1]}
      </TabPane>
    </Tabs>
  );
};

export default MainLayout;
