/* eslint-disable react/prefer-stateless-function, react/prop-types */
import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <div>
        <img
          className={this.props.class1}
          src={this.props.item.imageUrl}
          alt="item not found"
        />
      &nbsp;
      </div>
    );
  }
}

Image.propTypes = {
  store: React.PropTypes.object,
  id: React.PropTypes.number,
};

export default Image;
