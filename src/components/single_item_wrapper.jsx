/* eslint-disable react/prefer-stateless-function, arrow-body-style, react/prop-types */
import React from 'react';

import ItemImage from './item_image.jsx';
import ItemTitle from './item_title.jsx';
import ItemDescription from './item_description.jsx';

class SingleItemWrapper extends React.Component {
  render() {
    const item = this.props.store.state.itemsArray.filter((el) => {
      return el.id === this.props.id;
    })[0];
    return (
      <div className="itemWrapper">
        <ItemTitle {...this.props} class1="itemTitle animated bounce" item={item} />
        <ItemImage {...this.props} class1="itemImage animated bounce" item={item} />
        <ItemDescription {...this.props} class="itemDescription animated bounce" item={item} />
        <div className="map"></div>
      </div>
    );
  }
}

export default SingleItemWrapper;
