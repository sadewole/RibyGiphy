import React from 'react';

const SearchBar = () => {
  return (
    <div className='container my-5'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search for gif...'
        />
      </form>
    </div>
  );
};

export default SearchBar;
