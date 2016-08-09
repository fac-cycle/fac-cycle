/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Image from './item_image.jsx';
import ItemTitle from './item_title.jsx';

class ItemContainer extends React.Component {
  render() {
    return (
      <div className="itemContainer">
        <Image imgClass={this.props.imgClass} imgUrl={this.props.imgUrl} />
        <ItemTitle title={this.props.title} />
      </div>
    );
  }
}

ItemContainer.propTypes = {
  imgClass: React.PropTypes.string,
  imgUrl: React.PropTypes.string,
  title: React.PropTypes.string,
};

export default ItemContainer;
