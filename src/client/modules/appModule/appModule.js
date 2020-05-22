import React from 'react';
import { useEffect } from 'preact/hooks';
import { loadData } from './appActions';
import { connect } from 'react-redux';
import './appModule.less';

const AppModule = ({ getAllUsers }) => {
  useEffect(() => {
    console.log('app');
  }, []);
  return <div className="App">AppModulea</div>;
};
const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: () => dispatch(loadData()),
  };
};

export default connect(null, mapDispatchToProps)(AppModule);
