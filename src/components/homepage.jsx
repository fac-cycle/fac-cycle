/* eslint-disable react/prefer-stateless-function, import/no-unresolved */
 import React from 'react';
  import { Link } from 'react-router';
 import ItemContainerWrapper from './item_container_wrapper.jsx';
 import Navigator from './navigator.jsx';

 class Homepage extends React.Component {
   loadAllItems() {
     window.addEventListener('load', this.handleOnLoad.bind(this));
   }
   handleOnLoad() {
     this.props.store.dispatch({
       type: 'GET_ITEMS',
       keyword: event.target.value,
       async: true,
     });
   }
   render() {
     //validate whats inside local storage
     // use browserHistory.push('some/path') to redirect if not valid

    console.log(localStorage);
     return (
       <div className="homepageContainer">
         <Navigator {...this.props} />
         <ItemContainerWrapper {...this.props} />
       </div>
     );
   }
 }

 Homepage.propTypes = {
   store: React.PropTypes.object,
 };

 export default Homepage;
