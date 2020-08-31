import React, { useState } from 'react';

const SearchBar = ({ setQuery }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e);
    setQuery(e);
  };

  return (
    <div className='container my-5'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search for gif...'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default SearchBar;
