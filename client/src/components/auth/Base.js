import React from "react";


const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4 rounded",
  children,
}) => (
  <div>
    
    <div className="container-fluid font-weight-bold rounded">
      <div className="jumbotron-md bg-dark text-white text-center rounded">
        <h2 className="display-4 font-weight-bold rounded">{title}</h2>
        <p className="lead font-weight-bold ">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
  </div>
);

export default Base;
