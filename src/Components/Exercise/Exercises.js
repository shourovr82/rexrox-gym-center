import React from 'react';

const Exercise = ({ exercise, addToList }) => {
  const { picture, name, age, time } = exercise;




  return (
    <div className="col">
      <div className="card">
        <img src={picture} className="card-img-top img-fluid p-3 rounded" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className='fw-semibold text-muted'>For Age : {age}</p>
          <p className='fw-semibold text-muted'>Time Required: {time}s</p>
          <button onClick={() => addToList(exercise)} className='btn btn-success w-100'>Add to List</button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;