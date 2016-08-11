/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router';
import ItemContainer from './item_container.jsx';
import ToggleContainerViews from './toggle.jsx';

class ItemContainerWrapper extends React.Component {
  render() {
    const itemArray = this.props.store.state.itemsArray || [];
    const jsxItemArray = itemArray.map((item) =>
      (<div className="ItemContainer">
        <Link to={`/item/${item.id}`}><ItemContainer {...this.props} item={item} /></Link>
      </div>)
    );
    return (
      <div>
        <ToggleContainerViews />
        {jsxItemArray}
      </div>
    );
  }
}

ItemContainerWrapper.propTypes = {
  store: React.PropTypes.object,
};

export default ItemContainerWrapper;

