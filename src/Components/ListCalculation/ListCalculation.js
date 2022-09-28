import React from 'react';

const ListCalculation = () => {
  return (
    <div className='position-sticky'>
      <div>
        <img src="" alt="" />
        <h5>shafin Rahman</h5>
      </div>
      <div className='bg-white-50 d-flex'>
        <div>
          <h1>75 <span>kg</span></h1>
          <p>Weight</p>
        </div>
        <div>
          <h1>6.5</h1>
          <p>Height</p>
        </div>
        <div>
          <h1>25 <span>yrs</span></h1>
          <p>Age</p>
        </div>
      </div>

      <div>
        <h4>Add a Break</h4>
        <div className='d-flex'>
          <p>10s</p>
          <p>10s</p>
          <p>10s</p>
          <p>10s</p>
          <p>10s</p>
        </div>
      </div>
    </div>
  );
};

export default ListCalculation;