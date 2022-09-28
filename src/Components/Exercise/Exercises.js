import React from 'react';

const Exercise = ({ exercise, addToList }) => {
  const { picture, name, age, time, description } = exercise;




  return (
    <div className="col">
      <div className="card">
        <img src={picture} className="card-img-top img-fluid p-3 rounded" alt="" />
        <div className="card-body py-0">
          <h6 className="card-title">{name}</h6>
          <p className='text-muted age m-1'>{description ? description.slice(0, 100) : 'not available'}</p>
          <p className='fw-semibold age text-muted m-1'>For Age : {age}</p>
          <p className='fw-semibold age text-muted m-1'>Time Required: {time}s</p>
          <button onClick={() => addToList(exercise)} className='btn btn-success w-100 mt-2 mb-3'>Add to List</button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;