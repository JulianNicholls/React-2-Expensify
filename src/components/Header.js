import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
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
    </div>
  </header>
);

export default Header;
