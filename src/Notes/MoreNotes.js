// when there is a change in state var of a child then that will rerender the child but not the parent. - confirm this
// when there is a change in state var of a parent then that will rerender itself and will rerender child as well.

//! vvvvvv imp

// if u want that u want to rerender the child when there is a change in the state variable of the parent then u can use the useEffect hook in parent and keeping that state variable of parent in dependency array.
// or u can update state in the eventHandlers
//If u just make the change in the parent state variable outside of the useEffect and expect the rerender then yes rerender will happen but not the way u have imagined, it can lead to lots of inconsistencies.

// example-
// parent

// import { useState, useEffect } from "react";
// import User from "./User";

// const About = () => {
//   const [someVar, setSomeVar] = useState(1);
//   const userData = {
//     name: "Shivam",
//     place: "Kanpur",
//   };

//   useEffect(() => {
//     if (someVar === 1) {
//       setSomeVar(2);
//     }
//   }, [someVar]);

//   return (
//     <div className="about-cards-container">
//       <User userInfo={userData} extraParam={someVar} />
//     </div>
//   );
// };

// export default About;

//child
// import { useState } from "react";

// const User = (props) => {
//   console.log("user comp");
//   return (
//     <div className="user-card">
//       <h1>Name: Shivam</h1>
//       <h3>Contact: @shivam29</h3>
//     </div>
//   );
// };

// export default User;

//! u can update the state variables in the - useEffect or eventHandlers or when the component has been rendered. U must not update the state variables before the component has been rendered else it can cause issues.

//! https://www.dhiwise.com/post/understanding-the-importance-of-state-updates-in-react

//! https://react.dev/reference/react/useState
