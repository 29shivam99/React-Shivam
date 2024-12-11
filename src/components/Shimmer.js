import React from "react";
import ReactDOM from "react-dom/client";

const Shimmer = () => {
  return (
    // <div className="res-card-shimmer">
    //   <div className="img-container-card-shimmer">
    //     <div className="img-card"></div>
    //   </div>
    //   <div className="card-details">
    //     <h3></h3>
    //     <h4></h4>
    //     <h4></h4>
    //     <h4></h4>
    //     <h4></h4>
    //   </div>
    // </div>

    <div className="card-shimmer">
      <div className="shimmerBG media"></div>
      <div className="p-32">
        <div className="shimmerBG title-line"></div>
        <div className="shimmerBG title-line end"></div>

        <div className="shimmerBG content-line m-t-24"></div>
        <div className="shimmerBG content-line"></div>
        <div className="shimmerBG content-line"></div>
        <div className="shimmerBG content-line"></div>
        <div className="shimmerBG content-line end"></div>
      </div>
    </div>
  );
};

export default Shimmer;
