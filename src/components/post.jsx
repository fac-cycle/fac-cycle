import React from 'react';

const Post = ({ imgUrl, description }) => (
  <div>
    <img src={imgUrl} alt="segnaposto" height="100" width="100" />
    <div>
      <p> {description}</p>
    </div>
  </div>
);


export default Post;
