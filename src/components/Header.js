import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header
    style={{
      background: '#202050',
      color: '#eee'
    }}
  >
    <div className="container">
      <h1 style={{ margin: '0' }}>Expensify</h1>

      <div style={{ display: 'flex', justifyItems: 'left', marginTop: '1em' }} />
      <NavLink className="nav-link" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink className="nav-link" to="/create">
        Add Expense
      </NavLink>
      <button onClick={startLogout}>Log out</button>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startLogout }, dispatch);
};

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
