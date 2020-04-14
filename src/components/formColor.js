import React from "react";
import "../app.css";
import { Link, useParams } from "react-router-dom";

const FormColor = () => {
  const { color } = useParams();
  return (
    <div style={{ background: color, height: "100vh" }}>
      <h1>This is page {color}</h1>
      <Link to="/color">
        <h2>Go Back</h2>
      </Link>
    </div>
  );
};

export default FormColor;
