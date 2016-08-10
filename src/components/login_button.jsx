/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class LoginButton extends React.Component {
  render() {
    return (
      <form method="get" action="/login">
        <button type="submit" className="loginButton">LOGIN</button>
      </form>
    );
  }
 }

export default LoginButton;
