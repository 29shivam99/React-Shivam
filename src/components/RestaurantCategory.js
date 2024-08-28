import { useState } from "react";
import RestaurantCategoryData from "./RestaurantCategoryData";
const RestaurantCategory = (props) => {
  let [accordionsExpanded, setAccordionsExpanded] = useState([]);

  let { categories, title } = props?.menuData;

  console.log(categories);

  function handleAccordionClick(e, index) {
    if (accordionsExpanded.includes(index)) {
      console.log(index, "was expanded");
      setAccordionsExpanded(
        accordionsExpanded.filter((item) => item !== index)
      );
    } else {
      console.log(index, "was collapsed");
      setAccordionsExpanded([...accordionsExpanded, index]);
    }
  }

  return (
    <div className="restaurant-category-container">
      {/* monsoon */}
      <div className="category-title">
        <h2>{title}</h2>
      </div>
      {categories.map((item, index) => {
        return (
          <div className="accordion-container">
            {/* pack for 1 -  */}
            <div
              className="accordion-header"
              onClick={(event) => handleAccordionClick(event, index)}
            >
              <div>
                <h3>{item.accordionTitle}</h3>
              </div>
              <div className="expand-btn">
                <p>{"+"}</p>
              </div>
            </div>
            <div
              className={`${
                !accordionsExpanded.includes(index) && `accordion-data-hidden`
              }`}
            >
              {/* accordion details */}
              {item.accordionData.map((item, index) => {
                return (
                  <RestaurantCategoryData data={item} key={index} />
                  // <div className="accordion-data">
                  //   <div key={index} className="accordion-details">
                  //     <p>{menuTitle}</p>
                  //     <p>Rs. {price}</p>
                  //     <p>{description}</p>
                  //   </div>
                  //   <div className="accordion-image">
                  //     <img src={`${CDN_URL}${cloudinaryImageId}`}></img>
                  //   </div>
                  // </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantCategory;
