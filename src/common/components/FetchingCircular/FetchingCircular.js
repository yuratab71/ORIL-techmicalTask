import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./fetchingCircular.css";

const FetchingCircular = () => {
  return (
    <div className="circular_container">
      <div className="circular_wrapper">
        <CircularProgress />
      </div>
    </div>
  );
};

export default FetchingCircular;
