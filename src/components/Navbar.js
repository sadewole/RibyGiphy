import React from 'react';

const Navbar = () => {
  return (
    <header className='bs-component'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <a className='navbar-brand' href='#'>
          RibyGiphy
        </a>

        <a href='#' className='navbar-nav ml-auto'>
          <button className='btn btn-secondary my-2'>
            <i className='fab fa-github'></i>
          </button>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
