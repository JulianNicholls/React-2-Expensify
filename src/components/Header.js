import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header
    style={{
      background: '#202060',
      color: '#eee',
      padding: '1.2em'
    }}
  >
    <h1 style={{ margin: '0' }}>Expensify</h1>

    <div style={{ display: 'flex', justifyItems: 'left', marginTop: '1em' }} />
    <NavLink className="nav-link" to="/" exact>
      Dashboard
    </NavLink>
    <NavLink className="nav-link" to="/create">
      Add Expense
    </NavLink>
    <NavLink className="nav-link" to="/help">
      Help
    </NavLink>
  </header>
);

export default Header;
