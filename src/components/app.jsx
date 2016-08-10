/* eslint-disable react/prefer-stateless-function */
import { Router, Route, Link, HashHistory } from 'react-router';
import dummyItems from '../dummy_items.js';
import React from 'react';
import Homz from './homepage.jsx';
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
      itemsArray: dummyItems,
    };
  }
  render() {
    const store = { state: this.state, dispatch: this.dispatch };
    if (this.props.route.path.includes('/item')) { //Find out what this is
      return (
        <Item store={store} id={Number(this.props.params.id)}/>
      );
    } else {
      return (
        <Homz store={store}/>
      );
    }
  }
}

export default App;
