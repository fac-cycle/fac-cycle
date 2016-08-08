/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class ItemTitle extends React.Component {
  render() {
    const index = this.props.id;
    return (
      <span className="itemTitle">{this.props.store.state.itemsArray[index].title}</span>
    );
  }
}

ItemTitle.propTypes = {
  store: React.PropTypes.object,
  id: React.PropTypes.number,
};

export default ItemTitle;
