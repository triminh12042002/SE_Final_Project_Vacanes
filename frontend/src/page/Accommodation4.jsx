import * as React from "react";
import "./Accommodation4.css";
import antDesigncloudUplo from "./assets/antDesigncloudUplo.svg";
function Accommodation4() {
  return (
    <div className="desktop-1">
      <span className="vancances">Vancances</span>
      <span className="add-your-accommodati">
        Add your accommodation's galleries
      </span>
      <div className="frame-9">
        <img className="ant-designcloud-uplo" src={antDesigncloudUplo} />
        <span className="drag-and-drop-here">Drag and Drop here</span>
        <span className="or">or</span>
        <button className="frame-5">
          <span className="select-file">Select file</span>
        </button>
      </div>
      <div className="flex-container">
        <span className="back">Back</span>
        <span className="finish">Finish</span>
      </div>
    </div>
  );
};
export default Accommodation4;