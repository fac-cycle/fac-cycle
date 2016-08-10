/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class ItemTitle extends React.Component {
  render() {
    return (
      <span className="itemTitle">{this.props.item.title}</span>
    );
  }
}

ItemTitle.propTypes = {
  title: React.PropTypes.string,
};

export default ItemTitle;
