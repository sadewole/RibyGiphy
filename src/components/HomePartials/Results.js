import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const Results = ({ data, pagination }) => {
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Get Current Items
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFistItem = indexOfLastItem - itemPerPage;
  const currentItem = data.slice(indexOfFistItem, indexOfLastItem);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPaginate = (e) => setCurrentPage(currentPage + e);
  const prevPaginate = (e) => setCurrentPage(currentPage + e);

  return (
    <div className='container mt-3'>
      <div className='row'>
        {currentItem.map((item, index) => {
          return (
            <div
              className='card mb-3 col-12 col-md-6 col-lg-4 col-xl-3'
              key={index}
            >
              <img
                style={{ height: '200px', width: '100%', display: 'block' }}
                src={item.images.original.url}
                alt='Card image'
              />

              <div className='overlay-link'>
                <Link to={`/detail/${item.id}`}>
                  <button className='btn btn-secondary'>View details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {data.length > 1 && (
        <Pagination
          currentPage={currentPage}
          itemPerPage={itemPerPage}
          totalItem={data.length}
          paginate={paginate}
          prevPaginate={prevPaginate}
          nextPaginate={nextPaginate}
        />
      )}
    </div>
  );
};

export default Results;
