/* eslint-disable react/prefer-stateless-function, import/no-unresolved */
import React from 'react';

import ItemImage from './item_image.jsx';
import ItemTitle from './item_title.jsx';
import ItemDescription from './item_description.jsx';

class SingleItemWrapper extends React.Component {
  render() {
    const item = this.props.store.state.itemsArray.filter((el) => {
      return el.id === this.props.id;
    })[0];
    console.log(this.props.store.state.itemsArray)
    console.log(this.props.id)
    console.log(item)
    return (
      <div className="itemWrapper">
      <ItemTitle {...this.props} item={item} />
      <ItemImage {...this.props} item={item} />
      <ItemDescription {...this.props} item={item} />
      </div>
    );
  }
}

export default SingleItemWrapper;
