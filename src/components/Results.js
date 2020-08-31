import React from 'react';

const Results = ({ giffy, loading }) => {
  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <div className='container mt-3'>
      <div className='row'>
        {giffy.map((item, index) => {
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
                <a href='#'>
                  <button className='btn btn-secondary'>View details</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
