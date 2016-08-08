/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Image from './item_image.jsx';
import ItemTitle from './item_title.jsx';

class ItemContainer extends React.Component {
  render() {
    return (
      <div>
        <Image {...this.props} id={this.props.id} />
        <ItemTitle {...this.props} id={this.props.id} />
      </div>
    );
  }
}

ItemContainer.propTypes = {
  store: React.PropTypes.object,
  id: React.PropTypes.number,
};

export default ItemContainer;
