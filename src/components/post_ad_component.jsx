/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class PostAd extends React.Component {

  addItem() {
    const postcode = document.getElementById('postcode').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageUrls = ['http://tinyurl.com/jdxmmrc', 'http://tinyurl.com/jag4bnx'];


    this.props.store.dispatch({
      type: 'ADD_ITEM',
      async: false,
      postcode,
      title,
      description,
      imageUrls,
    });
  }


  render() {
    return (
      <div>
        <Navigator />
        <div>
          <input
            {...this.props}
            id="title"
            className="titleInput"
            type="text"
            value={this.props.store.state.title}
          />
          <textarea
            {...this.props}
            id="description"
            className="titleInput"
            type="text"
            value={this.props.store.state.description}
          />
          <input
            {...this.props}
            id="postcode"
            className="titleInput"
            type="text"
            value={this.props.store.state.postcode}
          />
        </div>
      </div>
    );
  }
}

PostAd.propTypes = {
  store: {
    dispatch: React.PropTypes.dispatch,
  },
};

export default PostAd;
