/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router';
import ItemContainer from './item_container.jsx';

class ItemContainerWrapper extends React.Component {
  render() {
    const itemArray = this.props.store.state.itemsArray || [];
    const jsxItemArray = itemArray.map((item, index) => {
      const wrapperClass = index % 2 === 0 ? "ItemContainerHorizontal" : "ItemContainerVertical";
     return (
        <Link to={`/item/${item.id}`}><ItemContainer class={wrapperClass} {...this.props} item={item} /></Link>
        );
    }
    );
    return (
      <div className="ItemContainerWrapper">
        {jsxItemArray}
      </div>
    );
  }
}

ItemContainerWrapper.propTypes = {
  store: React.PropTypes.object,
};

export default ItemContainerWrapper;

