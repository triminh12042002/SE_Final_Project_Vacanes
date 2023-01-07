// import * as React from "react";
import "./CreateAccommodation.css";
import materialSymbolsmeet from "./assets/materialSymbolsmeet.svg";
import vector from "./assets/vector.svg";
import vector1 from "./assets/vector1.svg";

function CreateAccommodation (){
  return (
    <div className="desktop-1">
      <span className="vancances">Vancances</span>
      <span className="which-type-of-place">
        Which type of place will guests have?
      </span>
      <div className="frame-4">
        <img className="vector" src={vector} />
        <span className="an-entire-place">An entire place</span>
      </div>
      <div className="frame-5">
        <img className="material-symbolsmeet" src={materialSymbolsmeet} />
        <span className="a-private-room">A private room</span>
      </div>
      <div className="frame-6">
        <img className="vector-1" src={vector1} />
        <span className="a-shared-room">A shared room</span>
      </div>
      <div className="flex-container">
        <span className="back">Back</span>
        <span className="next">Next</span>
      </div>
    </div>
  );
};
export default CreateAccommodation;