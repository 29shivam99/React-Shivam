import { CDN_URL } from "../utils/constants";
import imageId from "../utils/images/imagesIds";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";

const RestaurantCategoryData = (props) => {
  //console.log(props);
  let [quantityAdded, setQuantityAdded] = useState(props?.qtyToAdd ?? null);

  let { menuTitle, price, description } = props.data ?? {};
  let index = props.index;
  //console.log(index, props.data);

  let dispatch = useDispatch();
  function addToCart() {
    setQuantityAdded(quantityAdded + 1);
    let qtyToAdd = !quantityAdded ? 1 : quantityAdded + 1;
    let added = dispatch(addItem({ ...props, qtyToAdd }));
    //console.log(added);
  }

  function removeFromCart() {
    setQuantityAdded(quantityAdded - 1);
    let qtyToAdd = !quantityAdded ? 1 : quantityAdded + 1;
    dispatch(removeItem({ ...props, qtyToAdd }));
  }
  return (
    <div className="accordion-data">
      <div className="accordion-details">
        <p>{menuTitle}</p>
        <p>Rs. {price}</p>
        <p>{description}</p>
      </div>
      <div className="accordion-image">
        <img
          src={`${CDN_URL}${imageId[index]}`}
          style={{
            borderRadius: "8px",
            border: "none ",
            boxShadow: "#e9e9e9 2px 4px 10px 8px",
          }}
        ></img>
        {!quantityAdded && (
          <button
            style={{
              cursor: "pointer",
              position: "relative",
              left: "30px",
              fontSize: "14px",
            }}
            onClick={() => addToCart()}
          >
            Add +
          </button>
        )}

        {quantityAdded && (
          <div
            style={{
              display: "flex",
              left: "30px",
              margin: "0px auto",
              fontSize: "14px",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                left: "30px",
                fontSize: "14px",
                width: "30px",
                height: "20px",
              }}
              onClick={() => removeFromCart()}
            >
              -
            </button>
            <span style={{ fontSize: "16px" }}>{quantityAdded}</span>
            <button
              style={{
                cursor: "pointer",
                left: "30px",
                fontSize: "14px",
                width: "30px",
                height: "20px",
              }}
              onClick={() => addToCart()}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategoryData;
