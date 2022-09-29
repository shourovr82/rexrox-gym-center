import React, { useEffect, useState } from 'react';
import Exercises from '../Exercise/Exercises';
import ListCalculation from '../ListCalculation/ListCalculation';
import './Home.css'

const Home = () => {
  const [exercises, setExercise] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setExercise(data))
  }, [])

  const addToList = (item) => {
    const newLIst = [...list, item]
    setList(newLIst)
  }

  return (
    <div className=' home-section '>
      <div className='col px-4 pt-5'>
        <div className='d-flex align-items-center gap-2 mb-3 '>
          <img className='site-brand' src="https://i.ibb.co/km1LJqM/image-removebg-preview.png" alt="" />
          <h4 className='text-success fw-bold'>REXROX GYM CENTER</h4>
        </div>
        <h5 >Select your Exercise</h5>
        <div className="row row-cols-1 pt-4 row-cols-md-2 row-cols-lg-3 g-4">
          {
            exercises.map(exercise => <Exercises exercise={exercise} key={exercise.id} addToList={addToList}></Exercises>)
          }
        </div>

      </div>
      <div>
        <ListCalculation item={list}></ListCalculation>
      </div>
    </div>
  );
};

export default Home;