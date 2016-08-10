/* eslint-disable react/prefer-stateless-function, import/no-unresolved */
import React from 'react';

// import ItemContainerWrapper from './item_container_wrapper.jsx';
// import Navigator from './navigator.jsx';
import getItems from '../actions/get_items';
import ItemContainer from './item_container.jsx';

class Homepage extends React.Component {
//  loadAllItems() {
//    window.addEventListener('load', this.handleOnLoad.bind(this));
//  }
//  handleOnLoad() {
//    this.props.store.dispatch({
//      type: 'GET_ITEMS',
//      keyword: event.target.value,
//      async: true,
//    });
//  }
  constructor() {
    super();
    this.state = {
      items: [],
    };

    getItems(1, 2, 3, 4, (err, items) => {
      if (err) throw err;
      this.setState({ items });
    });
  }

  render() {
    return (
      <div className="homepageContainer">
      { this.state.items.map((item, i) => <ItemContainer key={i} item={item} />) }
       {/* <Navigator {...this.state} />
       <ItemContainerWrapper {...this.state} /> */}
      </div>
    );
  }
}

// Homepage.propTypes = {
//   store: React.PropTypes.object,
// };

export default Homepage;
