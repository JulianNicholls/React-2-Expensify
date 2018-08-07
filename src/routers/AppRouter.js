import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';

export const NotFoundPage = () => (
  <React.Fragment>
    <h1>404</h1>
    <p>That page was not found.</p>
    <p>
      <Link to="/">Back to bed, back to reality</Link>
    </p>
  </React.Fragment>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
