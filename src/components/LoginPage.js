import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div
    style={{
      height: '95vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <button onClick={startLogin}>Log in</button>
  </div>
);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startLogin }, dispatch);
};

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
