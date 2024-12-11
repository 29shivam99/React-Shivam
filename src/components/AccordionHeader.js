import { useState } from "react";

const AccordionHeader = (props) => {
  let [isExpanded, setIsExpanded] = useState(false);
  let { data, children } = props;
  //console.log(children);
  function handleHeaderClick(e) {
    setIsExpanded(!isExpanded);
  }
  return (
    <>
      <div className="accordion-header" onClick={(e) => handleHeaderClick(e)}>
        <div>
          <h3>{data.accordionTitle}</h3>
        </div>
        <div className="expand-btn">
          <p>{"+"}</p>
        </div>
      </div>
      <div>{isExpanded && <>{children}</>}</div>
    </>
  );
};
export default AccordionHeader;
