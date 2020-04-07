import React from 'react';
import '../app.css';
import { Link } from 'react-router-dom';



const Color = () => {
  return (
   <div>
    <header className="header">
     <h3>Welcome to Color Factory</h3>
     <Link to="/color/form">
      <h1>Add a Color</h1>
     </Link>
    </header>
    <p style={{ padding: "10px" }}>Please Select a Color</p>
    <div>
     <Link to="/color/red">Red</Link>
    </div>
    <div>
     <Link to="/color/green">Green</Link>
    </div>
    <div>
     <Link to="/color/orange">Orange</Link>
    </div>
   </div>
  );
}

export default Color;