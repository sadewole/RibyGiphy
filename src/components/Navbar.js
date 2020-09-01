import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='bs-component'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <NavLink className='navbar-brand' to='/'>
          RibyGiphy
        </NavLink>

        <a
          href='https://github.com/sadewole/RibyGiphy'
          target='_blank'
          className='navbar-nav ml-auto'
        >
          <button className='btn btn-secondary my-2'>
            <i className='fab fa-github'></i>
          </button>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
