import React from 'react';
import '../app.css';
import { Link } from 'react-router-dom';

const Red = () => (
  <div className="red">
  <h1>This is page Red</h1>

    <Link to="/color"><h2>Go Back</h2></Link>
  </div>
)

export default Red;