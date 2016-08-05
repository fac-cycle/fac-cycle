import React from 'react';

class HandleView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { view } = this.props;

    let value;

    if (view === 'View1') {
      value = <h1>HEY</h1>;
    } else if (view === 'View2') {
      value = <h1>BYE</h1>;
    }

    return (value);
  }
}

HandleView.propTypes = {
  view: React.PropTypes.string,
};

export default HandleView;
