import { Component } from "react";

class NewHeaderForUserClass extends Component {
  constructor(props) {
    super(props);
    console.log("nested child cons");
    console.log(props);
  }

  componentDidMount() {
    console.log("nested child componentDidMount");
  }

  render() {
    console.log("nested child render");
    return <h1>This is from header class for user</h1>;
  }
}

export default NewHeaderForUserClass;
