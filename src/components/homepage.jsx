/* eslint-disable react/prefer-stateless-function, import/no-unresolved */
 import React from 'react';

 import ItemContainerWrapper from './item_container_wrapper.jsx';
 import Navigator from './navigator.jsx';

 class Homepage extends React.Component {
   render() {
     return (
       <div className="lshomepageContainer">
         <Navigator {...this.props} />
         <ItemContainerWrapper {...this.props} />
       </div>
     );
   }
 }

 export default Homepage;
