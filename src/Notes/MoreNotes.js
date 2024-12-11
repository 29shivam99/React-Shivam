// when there is a change in state var of a child then that will rerender the child but not the parent. - confirm this
// when there is a change in state var of a parent then that will rerender itself and will rerender child as well.

//! vvvvvv imp

// if u want that u want to rerender the child when there is a change in the state variable of the parent then u can use the useEffect hook in child and keeping that state variable of parent in dependency array.
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
//   ////console.log("user comp");
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

//!React re-renders components when their props change. However, when dealing with internal state that is derived from props, additional care is needed to ensure that the internal state remains in sync with the updated props.

// example to demonstrate above thing-

//app.js

// import StarRating from "./StarRating";

// export default function App() {
//   return (
//     <div>
//       <StarRating num={5} filled={1} />
//     </div>
//   );
// }

// StarRating.js

// import { useState, useEffect } from "react";

// function DisplayStars({ filled }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={["star-icon", filled && "star-icon-filled"]
//         .filter(Boolean)
//         .join(" ")}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
//       />
//     </svg>
//   );
// }

// export default function StarRating({ num, filled }) {
//   let [hoveredIndex, setHoveredIndex] = useState(filled - 1);
//   let [clickedIndex, setClickedIndex] = useState(filled - 1);
//   //console.log(filled, hoveredIndex);

//   // Update the state whenever the `filled` prop changes
//   useEffect(() => {
//     setClickedIndex(filled - 1);
//     setHoveredIndex(filled - 1);
//   }, [filled]);

//   return (
//     <div>
//       {Array(num)
//         .fill(null)
//         .map((_, index) => {
//           return (
//             <span
//               onMouseEnter={() => {
//                 setHoveredIndex(index);
//               }}
//               onMouseLeave={() => {
//                 setHoveredIndex(clickedIndex);
//               }}
//               onClick={() => {
//                 setClickedIndex(index);
//                 setHoveredIndex(index);
//               }}
//             >
//               <DisplayStars filled={index <= hoveredIndex} />
//             </span>
//           );
//         })}
//     </div>
//   );
// }

//!Here’s a detailed breakdown of why you might need useEffect in this case:

//? React Component Lifecycle and Prop Changes-
// Props Change and Re-render:

// When props change, React re-renders the component, which means the component function is called again. During this re-render, the component uses the latest props to determine how it should be displayed.
// State Initialization:

// Internal state (hoveredIndex and clickedIndex) is initialized when the component first mounts and is not automatically updated when props change. This is because React state is designed to be local to the component and persists across renders until explicitly updated.

//? Problem with Internal State-
// State Derived from Props:

// If your internal state (hoveredIndex and clickedIndex) is derived from props (filled), and you do not update this state when the props change, the component’s behavior may not align with the new props. For example, if filled changes from 4 to 2, your component might still think it should show 4 filled stars unless the state is updated.
// Synchronizing State with Props:

// Without useEffect, the internal state (hoveredIndex and clickedIndex) does not automatically update to reflect changes in props. This can lead to inconsistencies where the component’s display does not match the updated props.

//? Why useEffect?
// The useEffect hook is used to synchronize internal state with props in these scenarios:

// Prop Changes:

// The useEffect hook runs after the component renders, and it can be set up to watch for changes to specific props. When the filled prop changes, useEffect will update the internal state accordingly.
// Maintaining Consistency:

// By using useEffect, you ensure that when the filled prop changes, the internal state (hoveredIndex and clickedIndex) is updated to match the new prop value. This maintains consistency between the props and the displayed state.

//? updated StarRating.js

// import { useState, useEffect } from "react";

// function DisplayStars({ filled }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={["star-icon", filled && "star-icon-filled"]
//         .filter(Boolean)
//         .join(" ")}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
//       />
//     </svg>
//   );
// }

// export default function StarRating({ num, filled }) {
//   let [hoveredIndex, setHoveredIndex] = useState(filled - 1);
//   let [clickedIndex, setClickedIndex] = useState(filled - 1);
//   //console.log(filled, hoveredIndex);

//! Update the state whenever the `filled` prop changes
//   useEffect(() => {
//     setClickedIndex(filled - 1);
//     setHoveredIndex(filled - 1);
//   }, [filled]);

//   return (
//     <div>
//       {Array(num)
//         .fill(null)
//         .map((_, index) => {
//           return (
//             <span
//               onMouseEnter={() => {
//                 setHoveredIndex(index);
//               }}
//               onMouseLeave={() => {
//                 setHoveredIndex(clickedIndex);
//               }}
//               onClick={() => {
//                 setClickedIndex(index);
//                 setHoveredIndex(index);
//               }}
//             >
//               <DisplayStars filled={index <= hoveredIndex} />
//             </span>
//           );
//         })}
//     </div>
//   );
// }
