import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  //console.log(props);
  let { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    props?.resData?.info;
  return (
    //! this is how we can use inline styles in React JSX
    <div className="res-card" style={styleCard}>
      <div className="img-container-card">
        <img className="img-card" src={`${CDN_URL}${cloudinaryImageId}`}></img>
      </div>
      <div className="card-details">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>
          <span>&#9733;</span>
          {avgRating} stars
        </h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime}</h4>
      </div>
    </div>
  );
};

export const promotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    //console.log(props);
    return (
      <div className="promoted-res-container">
        <label className="promoted-label">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
