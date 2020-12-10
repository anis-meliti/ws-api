import React from 'react';
import Comments from './Comments';

const Post = ({ post }) => {
  return (
    <div>
      <div className='card' style={{ width: '18rem;' }}>
        <div className='card-body'>
          <h5 className='card-title'>{post.title}</h5>
          <p className='card-title'>{post.body}</p>
        </div>
        <div className='card-footer'>
          <Comments id={post.id} />
        </div>
      </div>
    </div>
  );
};

export default Post;
