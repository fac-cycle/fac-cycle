/* eslint-disable react/prefer-stateless-function */
 import React from 'react';
 import Logo from './logo.jsx';
 import LoginButton from './login_button.jsx';

 class LoginContainer extends React.Component {
   render() {
     return (
       <div className="loginContainer  animated rubberBand">
         <Logo {...this.props} />
         <LoginButton {...this.props} />
       </div>
     );
   }
}

 export default LoginContainer;
