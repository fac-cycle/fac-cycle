/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class ItemTitle extends React.Component {
  render() {
    return (
      <span className="itemTitle animated bounce">My crappy sofa bed</span>
    );
  }
}

ItemTitle.propTypes = {
  title: React.PropTypes.string,
};

export default ItemTitle;
