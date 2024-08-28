import React from "react";
import UserClass from "./UserClass";
import User from "./User";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor of parent (about class component)");
  }

  componentDidMount() {
    console.log("componentDidMount of parent (about class component)");
  }

  render() {
    console.log("render of parent (about class component)");

    return (
      <div>
        <h1>About Class</h1>
        <UserClass name={"1"} />
        <UserClass name={"2"} />
      </div>
    );
  }
}

export default AboutClass;
