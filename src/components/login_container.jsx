/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Logo from './logo.jsx';
import agent from 'superagent';
import Button from './login.jsx';
class LoginContainer extends React.Component {

  click(){
    console.log('cicked')
    agent
      .get(document.URL.split(4000)[0] +'3000'+ '/login')
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Origin: *')
      .end((err, res)=>{
        console.log(err, res) 

      })

  }

  render() {
    return (
      <div className="loginContainer">
      <Logo />
      <Button > login with Facebook </Button>
      </div>
    );
  }
}

export default LoginContainer;
