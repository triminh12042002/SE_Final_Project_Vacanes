import * as React from "react";
import "./Accommodation2.css";
import mdiaddressMarker from "./assets/mdiaddressMarker.svg";
import rectangle from "./assets/rectangle.png";
function Accommodation2 (){
  return (
    <div className="desktop-1">
      <span className="vancances">Vancances</span>
      <span className="where-is-your-place">Where is your place located?</span>
      <div className="frame-4">
        <img className="mdiaddress-marker" src={mdiaddressMarker} />
        <span className="enter-the-address">Enter the address</span>
      </div>
      <div className="flex-container">
        <span className="back">Back</span>
        <img className="rectangle" src={rectangle} />
        <span className="next">Next</span>
      </div>
    </div>
  );
};
export default Accommodation2;