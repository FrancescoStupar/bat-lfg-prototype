import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-3 text-center items-center bg-gray-100'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/' className='p-4 font-medium'>
        Home
      </Link>
      <Link to='/profile' className='p-4 font-medium'>
        Profile
      </Link>
      <Link to='/menu' className='font-medium p-4 '>
        Why Lens
      </Link>
    </div>
  );
};

export default Dropdown;