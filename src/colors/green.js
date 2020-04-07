import React from 'react';
import '../app.css';
import { Link } from 'react-router-dom';

const Green = () => (
 <div className="green">
  <h1>This is page Green</h1>

  <Link to="/color">
   <h2>Go Back</h2>
  </Link>
 </div>
);

export default Green;