import * as React from "react";
import "./Accommodation3.css";
import mdibedEmpty from "./assets/mdibedEmpty.svg";
import bxsbath from "./assets/bxsbath.svg";
import mdihumanMale from "./assets/mdihumanMale.svg";
import materialSymbolsmeet from "./assets/materialSymbolsmeet.svg";
function Accommodation3(){
  return (
    <div className="desktop-1">
      <span className="vancances">Vancances</span>
      <span className="basics-information-a">
        Basics information about your place
      </span>
      <div className="frame-4">
        <img className="mdihuman-male" src={mdihumanMale} />
        <span className="guests">Guests</span>
      </div>
      <div className="frame-5">
        <img className="material-symbolsmeet" src={materialSymbolsmeet} />
        <span className="bedrooms">Bedrooms</span>
      </div>
      <div className="frame-6">
        <img className="mdibed-empty" src={mdibedEmpty} />
        <span className="beds">Beds</span>
      </div>
      <div className="frame-7">
        <img className="bxsbath" src={bxsbath} />
        <span className="bathrooms">Bathrooms</span>
      </div>
      <div className="flex-container">
        <span className="back">Back</span>
        <span className="next">Next</span>
      </div>
    </div>
  );
};
export default Accommodation3;