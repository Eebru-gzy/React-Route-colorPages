import React from 'react';
import '../app.css';
import { Link} from 'react-router-dom';

const Orange = () => (
 <div className="orange">
  <h1>This is page Orange</h1>

  <Link to="/color">
   <h2>Go Back</h2>
  </Link>
 </div>
);

export default Orange;