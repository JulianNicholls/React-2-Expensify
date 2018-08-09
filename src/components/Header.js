import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startLogout } from '../actions/auth';

export const Header = ({ displayName, startLogout }) => (
  <header>
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>

        <div style={{ marginLeft: 'auto' }}>
          {displayName} <button className="button button--link" onClick={startLogout}>Log out</button>
        </div>
      </div>
    </div>
  </header>
);

const mapStateToProps = state => ({
  displayName: state.auth.displayName
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ startLogout }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
