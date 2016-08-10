/* eslint-disable react/prefer-stateless-function */
import { Router, Route, browserHistory } from 'react-router';
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
      itemsArray: [
        {
          title: 'FUCK!',
          imgUrls: ['https://lh3.googleusercontent.com/FvPffcAJF5nbZ4Dib77Vq1sBRy7LsfD0UHIQCm0pK4SfEzCla13LJE0axnkAPDLOlg=h900'],
          imgClass: 'image',
          descripton: 'Fuck this fucking shit!',
        }
      ]
    };
  }
  render() {
    const store = { state: this.state, dispatch: this.dispatch };
    console.log(this.props)
    if (String(this.props.params.path).indexOf('jwt') >-1){
      console.log('here')
      localStorage.setItem('token', this.props.params.path.split('=')[1]) 
    }else if(localStorage.token == null){
      return(
              <Stranger  store={store}/> 
            ) 
    }   
    
  else if (this.props.params.path === 'item') {
      return (
        <Item store={store}/>
      );
    }  else {
      return (
        <Homz store={store}/>
      )
    } 
  }
}



export default App;
