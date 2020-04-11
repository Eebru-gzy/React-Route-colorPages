import React from 'react';
import '../app.css';
import { Link } from 'react-router-dom';



const Color = ({pages}) => {
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
      {pages.map(page => <div><Link key={page.name}to={page.link}>{page.name}</Link></div>)}
    </div>
   </div>
  );
}

export default Color;