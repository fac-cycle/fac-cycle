/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import HandleView from './view.jsx';

class ToggleContainerViews extends React.Component {
  constructor(props) {
    super();

    const view = props.defaultView;

    this.state = {
      view,
    };
  }

  handleClick(view) {
    this.setState({
      view,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.handleClick('View1'); }}>View1</button>
        <button onClick={() => { this.handleClick('View2'); }}>View2</button>
        <HandleView view={this.state.view} />
      </div>
    );
  }
}

ToggleContainerViews.propTypes = {
  defaultView: React.PropTypes.string,
};

export default ToggleContainerViews;
