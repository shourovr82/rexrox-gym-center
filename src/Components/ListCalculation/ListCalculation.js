import React, { useState } from 'react';
import './ListCalculation.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const ListCalculation = ({ item }) => {
  const [breakTime, setBreakTime] = useState('');

  //  handle newBreak time
  let newTime = 0;
  for (const list of item) {
    newTime = newTime + list.time;
  }

  const getOldbreak = localStorage.getItem('breakTime');
  const oldBreak = JSON.parse(getOldbreak);

  // handle break
  const handleBreak = (breaks) => {
    setBreakTime(breaks)
    localStorage.setItem('breakTime', breaks);
  }
  const notify = () => toast("Fully Completed Activity!");
  return (
    <div className=' p-3 bg-white d-flex flex-column  py-5 '>
      <div className='d-flex  align-items-center gap-4 pb-4'>
        <img className='photo-logo rounded-5' src={'https://i.ibb.co/kHhDgsD/f1891a09-6344-45a2-b763-487debff8e0e.jpg'} alt="" />
        <div className=''>
          <h6 >Shafin Rahman</h6>
          <span className='text-black-50'> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Sirajganj, Bangladesh</span>
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
          <p onClick={() => handleBreak(20)} className='break text-white p-2 shadow rounded-5 bg-success  fw-semibold'>20s</p>
          <p onClick={() => handleBreak(30)} className='break  text-white p-2 shadow rounded-5 bg-success  fw-semibold'>30s</p>
          <p onClick={() => handleBreak(40)} className='break  text-white p-2 shadow rounded-5 bg-success  fw-semibold'>40s</p>
          <p onClick={() => handleBreak(50)} className='break  text-white p-2 shadow rounded-5 bg-success  fw-semibold'>50s</p>
          <p onClick={() => handleBreak(60)} className='break  text-white p-2 shadow rounded-5 bg-success  fw-semibold'>60s</p>
        </div>
      </div>
      {/* exercise details  */}
      <div>
        <div className='bg-dark bg-opacity-10 rounded-3 p-2 my-4 pt-4  d-flex justify-content-evenly gap-4'>
          <h5>Exercise time</h5>
          <p className='text-muted  fw-semibold'><span>{newTime}</span> seconds</p>
        </div>
        <div className='bg-dark bg-opacity-10 rounded-3 p-2 my-4 pt-4  d-flex justify-content-evenly gap-5'>
          <h5>Break time</h5>
          <p className='text-muted fw-semibold'>{breakTime ? breakTime : oldBreak ? oldBreak : 0} seconds</p>
        </div>
        <div>
          <button onClick={notify} className='btn btn-success w-100'> Complete Activity </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ListCalculation;