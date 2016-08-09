/* eslint-disable react/prefer-stateless-function, import/no-unresolved */
import React from 'react';

import ItemImage from './item_image.jsx';
import ItemTitle from './item_title.jsx';
import ItemDescription from './item_description.jsx';

class SingleItemWrapper extends React.Component {

  render() {
    return (
      <div className="itemWrapper">
        <ItemTitle {...this.props} title={this.props.title} />
        <ItemImage {...this.props} imgClass={this.props.imgClass} imgUrl={this.props.imgUrl} />
        <ItemDescription {...this.props} description={this.props.description} />
      </div>
    );
  }
}
SingleItemWrapper.propTypes = {
  imgClass: React.PropTypes.string,
  imgUrl: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
};

export default SingleItemWrapper;
