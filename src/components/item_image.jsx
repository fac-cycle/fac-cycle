/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <div
        className={this.props.imgClass}
        style={{ backgroundImage: `url(${this.props.imgUrl})`, height: '30vh', width: '40vh' }}
      >
      &nbsp;
      </div>
    );
  }
}

Image.propTypes = {
  imgClass: React.PropTypes.string,
  imgUrl: React.PropTypes.string,
};

export default Image;
