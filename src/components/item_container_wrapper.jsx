/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ItemContainer from './item_container.jsx';


class ItemContainerWrapper extends React.Component {
  render() {
    return (
      <div className="ItemContainerWrapper">
        <ItemContainer class="ItemContainerHorizontal" />
        <ItemContainer class="ItemContainerVertical" />
        <ItemContainer class="ItemContainerHorizontal" />
        <ItemContainer class="ItemContainerVertical" />
      </div>
    );
  }
}

export default ItemContainerWrapper;
