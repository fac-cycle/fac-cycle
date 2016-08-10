import React from 'react';
import ItemContainer from './item_container.jsx';
import ToggleContainerViews from './toggle.jsx';

class ItemContainerWrapper extends React.Component {
  render() {
    const itemArray = this.props.itemsArray || [];
    const jsxItemArray = itemArray.map(function (item, index) {
      return (
        <div className="ItemContainer" key={index}>
        <ItemContainer {...this.props} id={index} />
        </div>
      );
    });
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
  
