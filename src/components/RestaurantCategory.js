import { useState } from "react";
import RestaurantCategoryData from "./RestaurantCategoryData";
import AccordionHeader from "./AccordionHeader";

//! this uses state variable here and it is more intuitive
const RestaurantCategory = (props) => {
  let [accordionIndex, setAccordionIndex] = useState(null);

  let { categories, title } = props?.menuData;
  let { categoryIndex, canShowCategoryIndex, funcToChild } = props;

  //! this function will not rerender the component 2 times, rather only 1 time bcoz => In React, state updates are batched for performance optimization. This means that multiple state updates within the same event handler or lifecycle method are processed in a single re-render
  function handleHeaderClick(e, index) {
    if (index === accordionIndex) {
      setAccordionIndex(null);
    } else {
      setAccordionIndex(index);
      funcToChild();
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
            {/* Accordion header */}
            <div
              className="accordion-header"
              onClick={(e) => handleHeaderClick(e, index)}
            >
              <div>
                <h3>{item.accordionTitle}</h3>
              </div>
              <div className="expand-btn">
                <p>{"+"}</p>
              </div>
            </div>

            {/* accordion details i.e subcategories */}
            {canShowCategoryIndex && accordionIndex === index && (
              <div>
                {item.accordionData.map((item, ind) => {
                  return (
                    <RestaurantCategoryData data={item} index={ind} key={ind} />
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantCategory;
