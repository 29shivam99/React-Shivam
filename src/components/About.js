import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  let userData = {
    name: "Shivam",
    place: "Kanpur",
  };
  return (
    <div className="about-cards-container">
      <User userInfo={userData} extraParam={"Dummy"} />
      <UserClass name={"Shivam Class"} placce={"kanpur"} />
    </div>
  );
};

export default About;
