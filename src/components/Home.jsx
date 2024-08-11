import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome   to Mr Kiksy  Newsletter App</h1>
      <div className="d-flex justify-content-center">
        <Link to="/subscribers" className="btn btn-primary mx-2">
          View Subscribers
        </Link>
        <Link to="/subscribe" className="btn btn-success mx-2">
          Input Email Address
        </Link>
      </div>
    </div>
  );
};

export default Home;
