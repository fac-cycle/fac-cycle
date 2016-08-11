/* eslint-disable react/prefer-stateless-function, react/prop-types */
 import React from 'react';

 class ItemDescription extends React.Component {
   render() {
     return (
       <span className="itemDescription">{this.props.item.description}</span>
     );
   }
 }

 ItemDescription.propTypes = {
   description: React.PropTypes.string,
 };

 export default ItemDescription;
