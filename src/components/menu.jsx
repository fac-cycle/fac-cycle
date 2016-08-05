/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Menu extends React.Component {
  render() {
    const menuList =
      ['Home', 'Near you', 'My Items', 'Make a listing', 'Logout']
      .map(listValue => <li className="li_Menu">{listValue}</li>);

    return (
      <div className="Menu">
        <ul className="ul_Menu">
        {menuList}
        </ul>
      </div>
    );
  }
}

export default Menu;
