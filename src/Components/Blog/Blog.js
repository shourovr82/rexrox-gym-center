import React from 'react';

const Blog = () => {
  return (
    <div className='pt-5 mt-5 border-top border-success'>
      <div className=' text-center'>
        <h3>FREQUENTLY ASKED QUESTIONS</h3>
      </div>
      <div className='container pt-5'>
        <div className="card text-white bg-success mb-3">
          <div className="card-header">Question 1...</div>
          <div className="card-body">
            <h5 className="card-title">How does REACT work?</h5>
            <p className="card-text">ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
          </div>
        </div>
        <div className="card text-white bg-success mb-3">
          <div className="card-header">Question 2...</div>
          <div className="card-body">
            <h5 className="card-title">What is the Difference Between State and Props?</h5>
            <p className="card-text">Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to React.createElement() or, if you're using JSX, the more familiar tag attributes.</p>
          </div>
        </div>
        <div className="card text-white bg-success mb-3">
          <div className="card-header">Question 3...</div>
          <div className="card-body">
            <h5 className="card-title">What does useEffect() do?</h5>
            <p className="card-text">It’s a hook that lets do side effects inside function components. It takes a function as a first argument, and an array of dependencies as the second, <br />


              i. Once, when component mounts <br />
              ii. fetch API data.<br />
              iii.validating input field. <br />
              iv.  live filtering.<br />
              v.  trigger animation on new array value.<br />
              vi.  update paragraph list on fetched API data update.<br />

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;