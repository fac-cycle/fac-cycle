/* eslint-disable react/prefer-stateless-function, import/no-unresolved */
 import React from 'react';
 import { Link, browserHistory } from 'react-router';
 import ItemContainerWrapper from './item_container_wrapper.jsx';
 import Navigator from './navigator.jsx';

 class Homepage extends React.Component {
   render() {
     console.log(localStorage)
     //validate whats inside local storage
     // use browserHistory.push('some/path') to redirect if not valid
   
     return (
       <div className="lshomepageContainer">
         <Navigator {...this.props} />
         <ItemContainerWrapper {...this.props} />
          <Link to='/item'>Item</Link> 
       </div>
     );
   }
 }

 export default Homepage;
