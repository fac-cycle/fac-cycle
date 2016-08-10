/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <div>
        <img
          className="image"
          src={this.props.src}
          alt="item not found"
        />
      &nbsp;
      </div>
    );
  }
}

Image.propTypes = {
  src: React.PropTypes.string,
};

export default Image;
