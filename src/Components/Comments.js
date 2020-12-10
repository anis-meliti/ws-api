import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      const { data } = await Axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );

      setComments(data);
    };
    getComments();
  }, [id]);
  return (
    <div className='row'>
      {comments.map((comment) => (
        <div className='row'>
          <hr />
          {comment.name}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Comments;
