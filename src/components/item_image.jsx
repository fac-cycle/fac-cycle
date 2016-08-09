/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Image extends React.Component {
  render() {
    const index = this.props.id;
    return (
      <div>
        <img
          className="image"
          src={this.props.store.state.itemsArray[index].imageUrls[0]}
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
