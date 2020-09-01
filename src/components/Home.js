import React, { useState, useEffect } from 'react';
import Results from './HomePartials/Results';
import SearchBar from './HomePartials/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchGif } from '../store/actions/giffyAction';

const Home = () => {
  const [search, setSearch] = useState('');
  const [empty, setEmpty] = useState(false);
  const [message, setMessage] = useState(false);
  const { data, pagination } = useSelector((state) => state.giffy);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchGif(search));

    if (search.length && data.length < 1) {
      setEmpty(true);
      setMessage('No results found');
    } else if (!search.length && data.length < 1) {
      setEmpty(true);
      setMessage('Search results will show here');
    } else {
      setEmpty(false);
      setMessage('');
    }
  }, [data.length, dispatch, search]);

  return (
    <main>
      <SearchBar setQuery={(e) => setSearch(e)} />
      {empty ? (
        <p className='text-center'>{message}</p>
      ) : (
        <Results data={data} pagination={pagination} />
      )}
    </main>
  );
};

export default Home;
