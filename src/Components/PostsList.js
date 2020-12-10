import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from './Post';
import backArrow from '../assets/icons/back-arrow.png';
import { Link } from 'react-router-dom';

const PostsList = ({ match: { params } }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await Axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${params.id}`
        );
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [params.id]);
  return (
    <>
      <div className='row'>
        <Link to='/'>
          <img
            src={backArrow}
            alt='back'
            style={{ width: '65px', height: '65px' }}
          />
        </Link>
      </div>
      <div className='row'>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default PostsList;
