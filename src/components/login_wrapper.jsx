/* eslint-disable react/prefer-stateless-function */
 import React from 'react';
 import LoginContainer from './login_container.jsx';

 class LoginWrapper extends React.Component {
   render() {
     return (
       <div className="loginWrapper">
         <LoginContainer {...this.props} />
       </div>
     );
   }
 }

 export default LoginWrapper;
