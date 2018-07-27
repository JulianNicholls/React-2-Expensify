import React from 'react';
import { NavLink } from 'react-router-dom';

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

export default Header;
