/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Login from './login.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Login />
      </div>
    );
  }
}

export default App;
