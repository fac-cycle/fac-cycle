/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ItemContainer from './item_container.jsx';

const itemArray = [
{ title: 'My crappy sofa bed',
description: 'This is the worst sofa that the world has ever seen. It\'s seriously gross',
postcode: 'E2 0SY',
category: 'furniture',
image_url: 'http://tinyurl.com/jg4p8fs',
user_id: 1, // Taken from JSON Web Token/Cookie
lat: '51.5295460939963', // not used by addItem() or updateItem()
lng: '-0.0423161603498166', // not used by addItem() or updateItem()
}];

class ItemContainerWrapper extends React.Component {
  render() {
    const jsxItemArray = itemArray.map(function (item, index) {
      return (
        <div className="ItemContainerWrapper" key={index}>
          <ItemContainer />
        </div>
      );
    });
    return (
      <div>
        {jsxItemArray}
      </div>
    );
  }
}

export default ItemContainerWrapper;
