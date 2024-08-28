import { CDN_URL } from "../utils/constants";

const RestaurantCategoryData = (props) => {
  let cloudinaryImageId =
    "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/5047de69-8461-4e1f-b76c-5123880b4989_330433.JPG";

  let { menuTitle, price, description } = props.data ?? {};
  return (
    <div className="accordion-data">
      <div className="accordion-details">
        <p>{menuTitle}</p>
        <p>Rs. {price}</p>
        <p>{description}</p>
      </div>
      <div className="accordion-image">
        <img src={`${CDN_URL}${cloudinaryImageId}`}></img>
      </div>
    </div>
  );
};

export default RestaurantCategoryData;
