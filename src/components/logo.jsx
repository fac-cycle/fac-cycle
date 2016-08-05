/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <div
        className="logo"
        style={{
          backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/en/9/95/Ren_H%C3%B6ek.jpg)',
          height: '30vh',
          width: '40vh' }}
      >
      &nbsp;
      </div>
    );
  }
}

Logo.propTypes = {
  logoUrl: React.PropTypes.string,
};

export default Logo;
