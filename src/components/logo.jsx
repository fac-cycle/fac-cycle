/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <div
        className="logo"
        style={{
          backgroundImage: 'url(assets/facycle-letters_for_homepage.png)',
          height: '30vh',
          width: '40vh' }}
      >
      &nbsp;
      </div>
    );
  }
}

export default Logo;
