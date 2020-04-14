import React from "react";
import "../app.css";

const Form = (props) => {
  const { handleColorChange, handleInputChange, handleSubmit } = props;
  return (
    <div className="form-page">
      <div className="form-plate">
        <form onSubmit={handleSubmit}>
          <h4>Select a Color</h4>
          <div className="form-container">
            <hr />
            <div>
              <div style={{ padding: "5px" }}>
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter Color"
                  name="name"
                />
              </div>
              <div style={{ padding: "10px", marginBottom: "5px" }}>
                <input type="color" name="color" onChange={handleColorChange} />
              </div>
            </div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
