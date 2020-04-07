import React from "react";
import "../app.css";

const Form = ({history}) => (
  <div className="form-page">
  <div className="form-plate">
   <form>
    <h4>Select a Color</h4>
    <div class="form-container">
     <hr />
     <div>
      <div style={{ padding: "5px" }}>
       <input type="text" placeholder="Enter Color" name="color" />
      </div>
      <div style={{ padding: "10px" }}>
       <input type="color" />
      </div>
     </div>
       <input type="submit" style={{ paddingTop: "5px" }} onClick={()=> history.push('/color')} />
    </div>
   </form>
  </div>
 </div>
);

export default Form;
