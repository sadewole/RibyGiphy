import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({
  itemPerPage,
  totalItem,
  paginate,
  nextPaginate,
  prevPaginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='mx-auto mt-3'>
      <ul className='pagination'>
        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
          <Link className='page-link' to='' onClick={() => prevPaginate(1)}>
            &laquo;
          </Link>
        </li>

        {pageNumbers.map((number) => (
          <li key={number} className='page-item active'>
            <Link className='page-link' to='' onClick={() => paginate(number)}>
              {number}
            </Link>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === pageNumbers.length && 'disabled'
          }`}
        >
          <Link className='page-link' to='' onClick={() => nextPaginate(-1)}>
            &raquo;
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
