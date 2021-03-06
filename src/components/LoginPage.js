import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control</p>
      <button className="button" onClick={startLogin}>
        Log in with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startLogin }, dispatch);
};

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
