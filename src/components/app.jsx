/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Menu from './menu';
import actions from '../actions';
import Navigator from './navigator.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.dispatch = (action) => {
      if (action.asyc) {
        this.setState({
          isFetching: true,
        });
      }
      if (!this.state.isFetching && !this.state.isDispatching) {
        this.setState(() => {
          switch (action.type) {
            case 'SEARCH':
              return actions.search(this.state, action);
            default: return this.state;
          }
        });
      }
    };
    this.state = {
      isFetching: false,
      isDispatching: false,
    };
  }
  render() {
    const store = { state: this.state, dispatch: this.dispatch };
    return (
      <div>
        <h1>Hello world</h1>
        <Menu store={store} />
        <Navigator store={store} />
      </div>
    );
  }
}

export default App;
