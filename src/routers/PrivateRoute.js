import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';

export const PrivateRoute = ({ loggedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      loggedIn ? (
        <React.Fragment>
          <Header />
          <Component {...props} />
        </React.Fragment>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  loggedIn: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
