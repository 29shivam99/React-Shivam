import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  let [resData, setResData] = useState([]);
  let { resId } = useParams(); // resId name must match the router name u wrote while configuring the route

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  let fetchRestaurantMenu = async () => {
    setTimeout(() => {
      console.log("data menu");
    }, 1200);
  };
  return (
    <div className="menu">
      <h1>Name</h1>
      <h2>Menu</h2>
      <h3>{resId}</h3>
      <ul>
        <li>ABCD1</li>
        <li>ABCD2</li>
        <li>ABCD3</li>
        <li>ABCD4</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
