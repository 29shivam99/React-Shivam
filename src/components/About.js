import { useState, useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  let [someVar, setSomeVar] = useState(1);

  useEffect(() => {
    if (someVar === 1) {
      setSomeVar(2);
      console.log(someVar); // it will still be 1. Update will happen in the next render cycle
    }
  }, [someVar]);

  const handleClick = () => {
    setSomeVar(someVar + 1);
  };

  console.log("about");

  let userData = {
    name: "Shivam",
    place: "Kanpur",
  };

  return (
    <div className="about-cards-container">
      <button onClick={handleClick}>Click</button>
      <User userInfo={userData} />
      {/* <UserClass name={"Shivam Class"} place={"kanpur"} /> */}
    </div>
  );
};

export default About;
