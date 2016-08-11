/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class LogoMenu extends React.Component {
  render() {
    return (
      <div
        className="logoMenu"
        style={{
          backgroundImage: 'url(assets/facycle_logo_letters.png)',
          height: '30vh',
          width: '40vh' }}
      >
      &nbsp;
      </div>
     );
  }
 }

export default LogoMenu;
