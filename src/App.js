import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const ExpenseDashboardPage = () => <h1>Expensify Dashboard</h1>;

const AddExpensePage = () => <h1>Add Expense</h1>;

const EditExpensePage = () => <h1>Edit Expense</h1>;

const HelpPage = () => <h1>Help!</h1>;

class ExpensifyApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ExpenseDashboardPage} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default ExpensifyApp;
