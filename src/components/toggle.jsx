/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import HandleView from './view.jsx';

class ToggleContainerViews extends React.Component {
  constructor(props) {
    super();

    const view = props.defaults.view;

    this.state = {
      view,
    };
  }

  handleClick(view) {
    this.props.store.dispatch({
      type: 'toggle',
      async: false,
      view,
    });
  }

  render() {
    return (
      <div>
        <button {...this.props} onClick={() => { this.handleClick('NearYou'); }}>NearYou</button>
        <button {...this.props} onClick={() => { this.handleClick('MyAds'); }}>MyAds</button>
        <button {...this.props} onClick={() => { this.handleClick('Search'); }}>Search</button>
        <HandleView {...this.props} view={this.props.store.state.view} />
      </div>
    );
  }
}

ToggleContainerViews.propTypes = {
  defaults: React.PropTypes.object,
  store: React.PropTypes.object,
};

export default ToggleContainerViews;
