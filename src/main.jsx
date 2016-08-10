/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import './sass/style.scss';
import App from './components/app.jsx';


class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App} />
        <Route path="/item/:id" component={App} />
      </Router>
    );
  }
}

ReactDOM.render(<Routers />, document.getElementById('app'));
