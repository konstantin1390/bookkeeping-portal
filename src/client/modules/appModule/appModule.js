import React, { memo } from 'react';
import { Layout } from 'antd';
import HeaderContent from './components/Header';
import LeftNavBar from './components/LeftNavBar';
import 'antd/dist/antd.css';
import './appModule.less';
import FileBoxModule from '../fileBoxModule/FileBoxModule';

const AppModule = () => {
  const { Header, Content, Sider } = Layout;

  return (
    <div className="App">
      <Layout>
        <Header className="App__Header">
          <HeaderContent />
        </Header>
        <Layout className="App__Content-Layout">
          <Sider theme="light" className="App__Sider">
            <LeftNavBar />
          </Sider>
          <Content className="App__Content">
            <FileBoxModule />

            {/*<Switch>*/}
            {/*  <Redirect from='/' to='/file_box'/>*/}
            {/*  <Route path="/tasks" component={TasksModule} />*/}
            {/*  <Route path={'/' || '/file_box'} component={FileBoxModule} />*/}
            {/*  <Route path="/mail" component={MailModule} />*/}
            {/*</Switch>*/}
          </Content>
          <Sider theme="light" className="App__Sider" />
        </Layout>
      </Layout>
    </div>
  );
};

export default memo(AppModule);
