/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Logo from './logo.jsx';
import LogoMenu from './menu_logo.jsx';
import Menu from './menu.jsx';
import SearchForm from './searchform.jsx';

class Navigator extends React.Component {
  render() {
    return (
      <div className="navigatorContainer">
        <div className="navigatorHeader">
          <Logo />
          <LogoMenu />
          <Menu />
        </div>
        <div className="navigatorBody">
          <SearchForm {...this.props} />
        </div>
      </div>
    );
  }
}

export default Navigator;
