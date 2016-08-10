/* eslint-disable react/prefer-stateless-function, import/no-unresolved */
 import React from 'react';

 import ItemContainerWrapper from './item_container_wrapper.jsx';
 import Navigator from './navigator.jsx';

 class Homepage extends React.Component {
   render() {
     return (
       <div className="homepageContainer">
         <Navigator {...this.props} />
         <ItemContainerWrapper />
       </div>
     );
   }
 }

 export default Homepage;
