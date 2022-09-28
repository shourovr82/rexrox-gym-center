import React from 'react';
import ListCalculation from '../ListCalculation/ListCalculation';
import './Home.css'

const Home = () => {







  return (
    <div className=' home-section container'>
      <div className='col'>
        <h3>REXROX</h3>
      </div>
      <div className='bg-success postion-relative'>
        <ListCalculation></ListCalculation>
      </div>
    </div>
  );
};

export default Home;