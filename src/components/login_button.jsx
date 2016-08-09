/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class LoginButton extends React.Component {
  render() {
    return (
      <form method="get" action="/login">
        <button type="submit" className="loginButton">Login</button>
      </form>
    );
  }
 }

export default LoginButton;
