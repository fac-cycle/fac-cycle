/* eslint-disable react/prefer-stateless-function, import/no-unresolved */
 import React from 'react';

 import ItemContainerWrapper from './item_container_wrapper.jsx';
 import Navigator from './navigator.jsx';

 class Homepage extends React.Component {
   render() {
     //validate whats inside local storage
     // use browserHistory.push('some/path') to redirect if not valid

    console.log(localStorage)
     return (
       <div className="lshomepageContainer">
         <Navigator state={this.props} />
         <ItemContainerWrapper state={this.props} />
       </div>
     );
   }
 }

 export default Homepage;
