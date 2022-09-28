import React, { useEffect, useState } from 'react';
import Exercises from '../Exercise/Exercises';
import ListCalculation from '../ListCalculation/ListCalculation';
import './Home.css'

const Home = () => {
  const [exercises, setExercise] = useState([])
  const [list, setList] = useState('')

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setExercise(data))
  }, [])

  const addToList = (listAdded) => {
    let time = listAdded;
    setList(time)
  }

  return (
    <div className=' home-section'>
      <div className='col px-4 pt-5'>
        <h3>REXROX</h3>
        <h5 >Select your Exercise</h5>
        <div className="row row-cols-1 pt-4 row-cols-md-3 g-4">
          {
            exercises.map(exercise => <Exercises exercise={exercise} key={exercise.id} addToList={addToList}></Exercises>)
          }
        </div>

      </div>
      <div>
        <ListCalculation list={list}></ListCalculation>
      </div>
    </div>
  );
};

export default Home;