/* eslint-disable react/prefer-stateless-function */
 import React from 'react';

 class ItemDescription extends React.Component {
   render() {
     return (
       <span className="itemDescription">This is the worst sofa that the world has ever seen.</span>
     );
   }
 }

 ItemDescription.propTypes = {
   description: React.PropTypes.string,
 };

 export default ItemDescription;
