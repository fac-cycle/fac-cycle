/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import actions from '../actions';

class App extends React.Component {
  constructor() {
    super();
    this.end = (state) => {
      this.setState(
        Object.assign(
          {},
          state,
          {
            isFetching: false,
          }
        )
      );
    };
    this.dispatch = (action) => {
      const actionAsync = Object.assign(
        {},
        action,
        {
          end: this.end,
        }
      );
      if (!this.state.isFetching) {
        if (action.asyc) {
          this.setState({
            isFetching: true,
          });
        }
        try {
          // eslint-disable-next-line global-require
          require(`../actions/${action.type.toLowerCase()}`)(this.state, actionAsync);
        } catch (err) {
          console.log(err);
        }
      }
    };
    this.state = {
      isFetching: false,
    };
  }
  render() {
    // const store = { state: this.state, dispatch: this.dispatch };
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default App;
