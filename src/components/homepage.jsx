/* eslint-disable react/prefer-stateless-function, import/no-unresolved */
 import React from 'react';

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
     return (
       <div className="homepageContainer">
         <Navigator {...this.props} />
         <ItemContainerWrapper />
       </div>
     );
   }
 }

 Homepage.propTypes = {
   store: React.PropTypes.object,
 };

 export default Homepage;
