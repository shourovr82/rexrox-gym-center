import React, { useState } from 'react';
import './ListCalculation.css'

const ListCalculation = ({ list }) => {



  return (
    <div className=' p-3 bg-white d-flex flex-column  py-5 '>
      <div className='d-flex  align-items-center gap-4 pb-4'>
        <img className='photo-logo rounded-5' src={'https://i.ibb.co/kHhDgsD/f1891a09-6344-45a2-b763-487debff8e0e.jpg'} alt="" />
        <div className=''>
          <h6 >Shafin Rahman</h6>
          <span className='text-black-50'>Sirajganj, Bangladesh</span>
        </div>
      </div>
      <div className='bg-dark bg-opacity-10 rounded-3 p-2 my-4 pt-4  d-flex justify-content-evenly gap-4'>
        <div >
          <h5>75<span className='fs-6 text-black-50'>kg</span></h5>
          <p className='text-muted fw-semibold'>Weight</p>
        </div>
        <div>
          <h5>6.5</h5>
          <p className='text-muted fw-semibold'>Height</p>
        </div>
        <div>
          <h5>25<span className='text-black-50 fs-6'>yrs</span></h5>
          <p className='text-muted fw-semibold'>Age</p>
        </div>
      </div>
      {/* add a break section */}
      <div >
        <h4>Add a Break</h4>
        <div className='bg-dark bg-opacity-10 rounded-3 p-2  d-flex justify-content-evenly gap-4 pt-4'>
          <p className='cursor-pointer text-white p-2 shadow rounded-5 bg-success  fw-semibold'>10s</p>
          <p className='cursor-pointer text-white p-2 shadow rounded-5 bg-success  fw-semibold'>10s</p>
          <p className='cursor-pointer text-white p-2 shadow rounded-5 bg-success  fw-semibold'>10s</p>
          <p className='cursor-pointer text-white p-2 shadow rounded-5 bg-success  fw-semibold'>10s</p>
          <p className='cursor-pointer text-white p-2 shadow rounded-5 bg-success  fw-semibold'>10s</p>

        </div>
      </div>
      {/* exercise details  */}
      <div>
        <div className='bg-dark bg-opacity-10 rounded-3 p-2 my-4 pt-4  d-flex justify-content-evenly gap-4'>
          <h5>Exercise time</h5>
          <p className='text-muted  fw-semibold'>{list} seconds</p>
        </div>
        <div className='bg-dark bg-opacity-10 rounded-3 p-2 my-4 pt-4  d-flex justify-content-evenly gap-5'>
          <h5>Break time</h5>
          <p className='text-muted fw-semibold'>15 seconds</p>
        </div>
        <div>
          <button className='btn btn-success w-100'> Complete Activity </button>
        </div>
      </div>
    </div>
  );
};

export default ListCalculation;