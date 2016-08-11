/* eslint-disable react/prefer-stateless-function */
import { Router, Route, Link, browserHistory } from 'react-router';
import React from 'react';
import Homz from './homepage.jsx';
import Stranger from './login_wrapper.jsx';
import Item from './single_item_view.jsx';
import jwt from 'jwt-decode'

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
    if (String(this.props.params.path).indexOf('jwt') >-1){
      console.log('here')
      localStorage.setItem('token', this.props.params.path.split('=')[1]) 
    }else if(localStorage.token == null){
      return(
              <Stranger  store={store}/> 
            ) 
    }   
  else if (this.props.params.path.includes('/item') {
      return (
        <Item store={store} id={Number(this.props.params.id)}/>
      );
    }  else {
      return (
        <Homz store={store}/>
      )
    } 
  }
}



export default App;
