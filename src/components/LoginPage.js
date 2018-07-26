import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../actions/auth';

export const LoginPage = ({ startLogin, startLogout }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
