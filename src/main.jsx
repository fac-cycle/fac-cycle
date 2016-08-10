import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import './sass/style.scss';
import App from './components/app.jsx';
import Homz from './components/homepage.jsx';
import Item from './components/single_item_view.jsx';


class Routers extends React.Component {
  render() {
    return (
      <Router>
      <Route path="/" component={App} />
      <Route path="/:item" component={App} />
      </Router>
    )
  }
}

ReactDOM.render(<Routers />, document.getElementById('app'));
