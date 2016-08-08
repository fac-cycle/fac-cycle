/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import actions from '../actions';

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
              return search(this.state, action);
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
    const store = {state: this.state, dispatch: this.dispatch};
    return (
      <h1>Hello world</h1>
    );
  }
}

export default App;
