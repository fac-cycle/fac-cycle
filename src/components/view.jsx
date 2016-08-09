import React from 'react';

class HandleView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { view } = this.props;

    let value;

    if (view === 'NearYou') {
      value = <h1>You are now in Near you</h1>;
    } else if (view === 'MyAds') {
      value = <h1>You are now in My Ads</h1>;
    } else if (view === 'Search') {
      value = <h1>You are now in Search</h1>;
    }
    return value;
  }
}

HandleView.propTypes = {
  view: React.PropTypes.string,
};

export default HandleView;
