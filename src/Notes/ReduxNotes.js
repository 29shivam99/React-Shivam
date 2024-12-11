// Redux is not mandatory
// Redux is used when project is very large, for small and medium level project we dont need it
// Redux is not react
// it is a library to manage the state
// there are other libraries like Zustland
// used to handle state
// debugging becomes easy, also we have redux dev tools like react dev tools
// redux is library whihc usually works with react but can be worked with other also

import { useSelector } from "react-redux";

// earlier we had different way writing redux, now we have newer way with redux toolkit

// we will be using react toolkit (RTK) alongwith react redux
// we wont be using vanilla redux

// installation-
// install @reduxjs/toolkit and react-redux

//!

// functions
// configureStore
// createSlice

// hooks-
// useSelector
// useDispatch

//! when u use useSelector be careful to select only the part which u really need.

// example;

// let store = useSelector((store) => store);
// let myItems = store.cart.items;

// let items = useSelector((store) => store.cart.items);

//! in above both items and myItems will work fine but there is PERFORMANCE ISSUE IN FIRST ONE SINCE STORE IS SUBSCRIBED TO OUR APP'S STORE SO ANY CHANGE IN ENTIRE STORE WILL AFFECT THIS AND THE COMPONENT IN WHICH IT IS BEING USED WILL RERENDER. ON THE OTHER HAND IF WE SEE SECOND CASE ITEMS IS SUBSCRIBED TO THE STORE>CART>ITEMS SO ANY CHANGE IN THIS WILL AFFECT ITEMS AND IF ANYTHING ELSE IN STORE OR CART CHANGES THEN IT WILL NOT AFFECT ITEMS.

// reducer and reducers

// in our app's store we have keyword as reducer, since it is 1 big reducer having lots of reducers but in slice we have reducers and while exporting it is .reducer since we are exporting only 1
