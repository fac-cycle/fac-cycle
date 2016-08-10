/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Menu extends React.Component {
  render() {
    const menuList =
      ['Home', 'Near you', 'My Items', 'Make a listing', 'Logout']
      .map((listValue, i) => <a href="/" key={i}><li className="li_Menu">{listValue}</li></a>);

    return (
      <div className="menu">
        <ul className="ulMenu">
        {menuList}
        </ul>
      </div>
    );
  }
}

export default Menu;
