/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Image from './item_image.jsx';
// import ItemTitle from './item_title.jsx';

class ItemContainer extends React.Component {
  render() {
    return (
      <div>
        <Image src={this.props.item.image_url} />
        {/* <ItemTitle {...this.props} /> */}
      </div>
    );
  }
}

ItemContainer.propTypes = {
  item: React.PropTypes.shape({
    image_url: React.PropTypes.string,
  }),
};

export default ItemContainer;
