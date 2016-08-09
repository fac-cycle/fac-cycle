/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router';
import ItemImage from './item_image.jsx';
import ItemTitle from './item_title.jsx';
import ItemDescription from './item_description.jsx';

class ItemContainer extends React.Component {

  render() {
    return (
      <div>
        <Link to="/description">
          <div className="itemContainer">
            <ItemImage {...this.props} imgClass={this.props.imgClass} imgUrl={this.props.imgUrl} />
            <ItemTitle {...this.props} title={this.props.title} />
            <ItemDescription {...this.props} description={this.props.description} />
          </div>
        </Link>
      </div>
    );
  }
}

ItemContainer.propTypes = {
  imgClass: React.PropTypes.string,
  imgUrl: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
};

export default ItemContainer;
