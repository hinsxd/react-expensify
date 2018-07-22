import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-acrtive" exact={true}>
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-acrtive">
      Create Expense
    </NavLink>
  </header>
);

export default Header;
