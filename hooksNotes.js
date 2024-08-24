//////////! hooks

// react hooks are normal JS utility functions provided by react.

let myVariable = []; // normal JS variable

//! 1. useState() - 80% u will be using this - keeps the data and UI in sync - wheever a state variable updates then react rerenders the component
//! 2. useEffect()- 20% u will be using this

//! very rarely u will be working with some other hooks

//////// ! useState
// we want to create a superpowerful variable in react called STATE variable - so we use useState()
// called state variable since it maintains the state of a component
// it scope will be component in wchih it is created

//how to create -

// const [restaurantList] = useState([]); // equivalent to write const restaurantList = [] in JS. Here in argument we pass the initial value.
// const [restaurantList] = useState(null);
// const [restaurantList] = useState([{name:"dominos", rating:4}]);

// how to modify it?

// we can take 1 function in array - naming convention is to wrote set<state variable name>
const [restaurantList, setRestaurantList] = useState([]); // array destrcuturing

// same as
// let arr = useState([]);
// [restaurantList, setRestaurantList] = arr;
//or restaurantList = arr[0], setRestaurantList = arr[1]

let newResList = [{ age: 12 }];
setRestaurantList(newResList); // pass new value that u want state variable to take

//! when a state variable changes then the ENTIRE COMPONENT in whcih it is declared is rerendered.

//! whenever therer is a change ins state variable then the React finds out the difference between old nd new virtual DOm and update actual dom

//! always create state variable in the component - like below

// import ...

// dont efine usestate here

// const Body = () => {
//   define usestate here
//   define always in top -> recommended
//   dont create it in if else or loop or in function -> not recommended
// };

//////////////////! these DOM manipulation in react are very fast hence react apps are so fast

//////////////!  useEffect() -

// it is a normal function that takes 2 args - 1. a callback func 2. a dependency(optional)

// it is called after the componenet in which it is defined is rendered
// if u want to do something after component is rendered then we use this hook

//! when it runs -
// when we have not passed any dependency array -> every time component is rendered then it is also called
// when dependency array is empty -> called at initial render.
// when we put somthing in dependency array -> called when that thing is changed
//! Empty dependency array means this runs once, similar to componentDidMount

// dependencies array takes all the things
