/* eslint-disable react/prefer-stateless-function, import/no-unresolved */
import React from 'react';
import Navigator from './navigator.jsx';
import SingleItemWrapper from './single_item_wrapper.jsx';


class SingleItemPage extends React.Component {
  render() {
    return (
      <div className="itemPageWrapper">
        <Navigator {...this.props} />
        <SingleItemWrapper {...this.props} />
      </div>
    );
  }
}

export default SingleItemPage;
