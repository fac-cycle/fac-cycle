/* eslint-disable react/prefer-stateless-function, react/prop-types */
import React from 'react';
import Homz from './homepage.jsx';
import Stranger from './login_wrapper.jsx';
import Item from './single_item_view.jsx';

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
      itemsArray: [],
    };
    this.dispatch({
      async: true,
      type: 'GET_ITEMS',
    });
  }
  render() {
    const store = { state: this.state, dispatch: this.dispatch };
    if (this.props.location.query.jwt) {
      localStorage.setItem('token', this.props.location.query.jwt);
    }
    if (localStorage.token == null) {
      return (
        <Stranger store={store} />
      );
    } else if (String(this.props.route.path).indexOf('/item') > -1) {
      return (
        <Item store={store} id={Number(this.props.params.id)} />
      );
    }
    return (
      <Homz store={store} />
    );
  }
}


export default App;
