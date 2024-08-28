import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  console.log("RestaurantMenu started");
  let { resId } = useParams(); // resId name must match the router name u wrote while configuring the route

  let info = useRestaurantMenu(resId);

  console.log("RestaurantMenu", info);

  if (info === null) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <h1>Name: {info}</h1>
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

//! When setData(result) is called in the useRestaurantMenu hook, it updates the state of the hook. In React, when the state in a hook changes, it triggers a re-render of the component that uses that hook. Here’s how the flow works in detail:

// Initial Render:

// The RestaurantMenu component renders initially.
// The useRestaurantMenu hook is called, and the useEffect inside it runs, which triggers the fetchRestaurantInfo function.
// Fetching Data:

// The fetchRestaurantInfo function makes an asynchronous call to fetch data.
// While waiting for the data, the component might display a loading state or some placeholder content if you handle it accordingly.
// Data Update:

// Once the data is fetched and the setData(result) function is called, the state inside useRestaurantMenu is updated.
// React detects this state change and schedules a re-render of the RestaurantMenu component.
// Re-render:

// The RestaurantMenu component re-renders with the updated info value from the useRestaurantMenu hook.
// The component will now have the updated data and render accordingly.
