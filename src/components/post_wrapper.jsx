/* eslint-disable react/prefer-stateless-function, react/prop-types, arrow-body-style */
import React from 'react';
import Post from './post.jsx';

const PostWrap = (props) => {
  const populatePostArray = props.displaying.map((el) => {
    return (
      <div>
        < Post src={el.src} description={el.description} />
      </div>
    );
  });
  return (
    <div>
    {populatePostArray}
    </div>
  );
};


export default PostWrap;
