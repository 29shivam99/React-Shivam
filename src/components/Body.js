import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import restaurantData1 from "../utils/mockData";
import Shimmer from "./Shimmer";
import { SHIMMER_CARDS_LEANGTH } from "../utils/constants";
import { Link } from "react-router-dom";
const Body = () => {
  // local state variable for body
  let [restaurantList, setRestaurantList] = useState([]);
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);
  let [searchValue, setSearchValue] = useState([""]);
  console.log("body start");

  useEffect(() => {
    const fetchRestaurantList = async () => {
      console.log("useeffect in body");
      // Define the async function inside useEffect
      try {
        let result = await fetch(
          `https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999`
        );
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await result.json();
        console.log(data);
        setRestaurantList(restaurantData1);
        setFilteredRestaurant(restaurantData1);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchRestaurantList();
  }, []);

  bodyStyle = {
    marginTop: "20px", // see values are string and the keys are camel cased
  };

  // consitional rendering - rendering according some condition
  if (restaurantList.length === 0) {
    return (
      <div className="body" style={bodyStyle}>
        <div className="restaurant-container">
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      </div>
    );
  }
  console.log("body rendered");
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            if (e.target.value === "") {
              setFilteredRestaurant(restaurantData1);
            }
          }}
        />
        <button
          onClick={(e) => {
            let inputValue = document.querySelector(".search-input").value;
            console.log("search", inputValue, 1);
            if (inputValue !== "") {
              const filteredData = restaurantList.filter((item) => {
                console.log(item.info.name);
                return item.info.name
                  .toLowerCase()
                  .includes(inputValue.toLowerCase());
              });

              console.log(filteredData);
              setFilteredRestaurant(filteredData);
            } else {
              setFilteredRestaurant(restaurantData1);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let newRestaurantData1 = restaurantData1.filter((item) => {
              if (item.info.avgRating > 4.4) {
                return item;
              }
            });
            setRestaurantList(newRestaurantData1);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((rest) => {
          return (
            <Link to="" key={rest.info.id}>
              <RestaurantCard resData={rest} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

// ! dont forget to return it. U did not return and hence was not getting them in UI
// ! never use index as the key - bad practice as per offical react. It wont give error but this is not recommended. In rare case when u dont have any property that can be used then u can use index as key but avoid.
//! also do remember that key must be passed to the topmost parent of element which is getting returned from the map.
//! passing a props to a component is same as passing arg to a function, see resData

/* // ! passing props individually, but at recievers end it will come as an object, props.name u can use there. Or u can destructure at recievers end*/

/* <RestaurantCard name="KFC" cuisines="North Indian" /> */

/* <RestaurantCard resData={restaurantData1[0]} /> */
