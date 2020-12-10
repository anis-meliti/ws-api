import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/icons/PngItem_1468479.png';

const UserCard = ({ user }) => {
  return (
    <div className='col-md-4 mt-3'>
      <Link to={`/posts/${user.id}`}>
        <div className='card' style={{ width: '18rem;' }}>
          <img src={profileImage} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{user.name}</h5>
            <h5 className='card-title'>{user.email}</h5>
            <h5 className='card-title'>{user.phone}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
