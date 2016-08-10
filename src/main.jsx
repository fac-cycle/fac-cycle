import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './sass/style.scss';
import App from './components/app.jsx';

class Routers extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/:path" component={App} />
      </Router>
    )
  }
}

ReactDOM.render(<Routers />, document.getElementById('app'));
