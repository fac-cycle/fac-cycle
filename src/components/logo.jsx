/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <img
          className="logo_img"
          alt=""
          src={'assets/facycle_round_logo.svg'}
            />
        <img
          className="logo_logotype"
          alt=""
          src={'assets/facycle_logo_letters.svg'}
      />
      </div>
    );
  }
}

export default Logo;
