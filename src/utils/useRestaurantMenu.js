import { useEffect, useState } from "react";
import { restaurantMenuData } from "./mockData";

const useRestaurantMenu = (id) => {
  let [data, setData] = useState(null);

  useEffect(() => {
    console.log("useeffect useRestaurantMenu");
    fetchRestaurantInfo();
  }, []);

  console.log("useRestaurantMenu started");

  function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(restaurantMenuData);
      }, 3200);
    });
  }

  const fetchRestaurantInfo = async () => {
    console.log("fetch started in useRestaurantMenu");
    let result = await getData();
    console.log("in hook " + result);
    setData(result);
  };

  return data;
};

export default useRestaurantMenu;
