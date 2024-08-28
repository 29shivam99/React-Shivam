import { useEffect, useState } from "react";
import { restaurantMenuData } from "./mockData";

const useRestaurantMenu = (id) => {
  let [data, setData] = useState(null);

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(restaurantMenuData);
      }, 3200);
    });
  }

  const fetchRestaurantInfo = async () => {
    let result = await getData();
    setData(result);
  };

  return data;
};

export default useRestaurantMenu;
