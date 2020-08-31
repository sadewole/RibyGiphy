import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Searchbar from './components/SearchBar';
import ResultsComponent from './components/Results';
import './App.css';

function App() {
  const [giffy, setGiffy] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [giffyPerPage, setGiffyPerPage] = useState();

  useEffect(() => {
    fetchGif();
  }, []);

  const fetchGif = () => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      return axios
        .get(
          'https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=sphinx&limit=25&offset=0&rating=Y&lang=en'
        )
        .then((result) => {
          const { data, pagination } = result.data;
          setLoading(false);
          setGiffy(data);
          setCurrentPage(pagination);
          console.log(result.data);
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  };
  return (
    <div className='container-fluid px-0'>
      <Navbar />
      <Searchbar />
      <ResultsComponent giffy={giffy} loading={loading} />
    </div>
  );
}

export default App;
