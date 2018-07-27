import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => <h2>Dashboard</h2>;

const AddExpensePage = () => <h2>Add Expense</h2>;

const EditExpensePage = () => <h2>Edit Expense</h2>;

const HelpPage = () => <h2>Help!</h2>;

const NotFoundPage = () => (
  <React.Fragment>
    <h1>404</h1>
    <p>That page was not found.</p>
    <p>
      <Link to="/">Back to bed, back to reality</Link>
    </p>
  </React.Fragment>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>

    <NavLink to="/" exact>
      Dashboard
    </NavLink>
    <NavLink to="/create">Add Expense</NavLink>
    <NavLink to="/edit">Edit Expense</NavLink>
    <NavLink to="/help">Help</NavLink>
  </header>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
