import React from "react";
import "./PageNotFound.css";
function PageNotFound() {
  return (
    <div>
      <div className="errormsgdiv">
        <span className="err-msg-span">
          {" "}
          404<br></br>
         Page not found!
        </span>
      </div>
    </div>
  );
}

export default PageNotFound;
