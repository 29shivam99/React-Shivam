import RestaurantCategoryData from "./RestaurantCategoryData";
import appStore from "../utils/appStore";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import Body from "./Body";

const Cart = () => {
  let items = useSelector((appStore) => {
    return appStore.cart.items;
  });
  //console.log("cart rerender");
  return (
    <div className="cart-section">
      {items.length === 0 && (
        <div>
          <EmptyCart />
          {/* <Body /> */}
        </div>
      )}
      {items.length > 0 && (
        <div style={{ margin: "auto" }}>
          {items.map((value, index) => {
            //console.log(value);
            return (
              <RestaurantCategoryData
                data={value.data}
                index={value.index}
                qtyToAdd={value.qtyToAdd}
              />
            );
          })}
        </div>
      )}
      {items.length > 0 && (
        <div className="price-section">
          <div>
            <span>Total Cost - {}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
